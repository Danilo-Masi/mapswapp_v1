import Fastify from "fastify";
import 'dotenv/config';
// Cors plugin
import fastifyCors from "@fastify/cors";
// Rawbody plugin
import fastifyRawBody from "fastify-raw-body";
// Routes
import billingRoutes from "./routes/billing/billing.mjs";

const fastify = Fastify({ logger: true });

fastify.register(fastifyRawBody, {
    field: 'rawBody',
    global: true,
    encoding: 'utf8',
    runFirst: true,
});

fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

fastify.register(billingRoutes, { prefix: "/billing" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}