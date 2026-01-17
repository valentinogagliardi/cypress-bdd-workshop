import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import fastifyFormbody from "@fastify/formbody";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import Fastify from "fastify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
	logger: true,
});

await fastify.register(fastifyFormbody);
await fastify.register(fastifyView, {
	engine: {
		ejs: ejs,
	},
	root: join(__dirname, "views"),
});

fastify.get("/membership/renewal", async (_, reply) => {
	return reply.view("renewal.ejs");
});

fastify.post("/membership/renewal", async (request, reply) => {
	const { renewalPeriod, cardNumber, cardholderName } = request.body;

	if (!renewalPeriod || !cardNumber || !expiry || !cvc || !cardholderName) {
		return reply.status(400).view("renewal.ejs", {
			error: "All fields are required",
		});
	}

	return reply.view("success.ejs", {
		email: "jon.doe@example.com",
	});
});

try {
	await fastify.listen({ port: 3000 });
	console.log(`Server running at http://localhost:3000`);
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
