import Fastify from "fastify";
const fastify = Fastify({ logger: true });

import billingRoutes from "./routes/billing/create-checkout-session.mjs";

fastify.register(billingRoutes);

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}