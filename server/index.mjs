import Fastify from "fastify";
import 'dotenv/config';
// Cors plugin
import fastifyCors from "@fastify/cors";
// Routes
import billingRoutes from "./routes/billing/billing.mjs";

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
});

fastify.register(billingRoutes, { prefix: "/billing" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}