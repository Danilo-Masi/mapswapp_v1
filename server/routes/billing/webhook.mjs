import { creem } from "../../config/creem.mjs";
import { resend } from "../../config/resend.mjs";
import { supabase } from "../../config/supabase.mjs";
import crypto from "node:crypto";

export default async function webhookRoutes(fastify) {

    // Resend
    const TEMPLATE_ID = process.env.RESEND_TEMPLATE_ID || "your-template-id";

    // Verify Signature
    function verifySignature(rawBody, signature, secret) {
        const expectedSignature = crypto
            .createHmac("sha256", secret)
            .update(rawBody)
            .digest("hex");

        if (expectedSignature.length !== signature.length) return false;

        return crypto.timingSafeEqual(
            Buffer.from(expectedSignature, "hex"),
            Buffer.from(signature, "hex")
        );
    }
    fastify.post("/webhook", { config: { rawBody: true } }, async (request, reply) => {
        try {
            const signature = request.headers["creem-signature"];
            const rawBody = request.rawBody;

            if (!signature || !rawBody) {
                return reply.status(400).send("Invalid webhook payload");
            }

            const isValid = verifySignature(
                rawBody,
                signature,
                process.env.CREEM_WEBHOOK_SECRET
            );

            if (!isValid) {
                return reply.status(400).send("Invalid signature");
            }

            await creem.webhooks.handleEvents(rawBody, signature, {

                onCheckoutCompleted: async (data) => {
                    const email = data.customer?.email;
                    const product_id = data.order?.product;
                    const checkout_id = data.id;

                    console.log("Email: " + email); // DEBUG LOG
                    console.log("Product ID: " + product_id); // DEBUG LOG
                    console.log("Checkout ID: " + checkout_id); // DEBUG LOG


                    let { data: itineraries, error } = await supabase
                        .from('itineraries')
                        .select('maps_url')
                        .eq("product_id", product_id)
                        .single();

                    if (error) {
                        console.log(error); // DEBUG LOG
                        process.exit(1);
                    }

                    const map_url = itineraries?.maps_url;

                    console.log(itineraries); // DEBUG LOG
                    console.log("MAP_URL: " + map_url); // DEBUG LOG

                    const { error: resendError } = await resend.emails.send({
                        from: "Mapswapp <support@mapswapp.com>",
                        to: email,
                        template: {
                            id: TEMPLATE_ID,
                            variables: {
                                MAP_URL: map_url,
                            },
                        },
                    });

                    if (resendError) {
                        console.error("Error sending email: " + error);
                        process.exit(1);
                    }

                    await supabase
                        .from("transactions")
                        .insert({
                            email,
                            product_id: product_id,
                            checkout_id: checkout_id
                        });
                },

                onRefundCreated: async () => {
                    request.log.info("Refund created");
                },

                onDisputeCreated: async () => {
                    request.log.info("Dispute created");
                }

            });

            return reply.status(200).send("OK");

        } catch (error) {
            request.log.error(error);
            return reply.status(400).send("Webhook error");
        }
    });
}