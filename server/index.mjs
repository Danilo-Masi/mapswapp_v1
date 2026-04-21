import Fastify from "fastify";
const fastify = Fastify({ logger: true });

fastify.get("/", async function handler(request, reply) {
    request.log.info("Handiling hello world");
    return { hello: "fatstify ciao" };
});

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}