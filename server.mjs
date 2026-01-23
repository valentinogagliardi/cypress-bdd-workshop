import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import fastifyFormbody from "@fastify/formbody";
import fastifyStatic from "@fastify/static";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import Fastify from "fastify";
import productsData from "./cypress/fixtures/products.json" with {
	type: "json",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
	logger: true,
});

await fastify.register(fastifyFormbody);
await fastify.register(fastifyStatic, {
	root: join(__dirname, "public"),
	prefix: "/public/",
});
await fastify.register(fastifyView, {
	engine: {
		ejs: ejs,
	},
	root: join(__dirname, "views"),
});

// Load products from fixtures
let products = productsData;

// Render products page
fastify.get("/products", async (_, reply) => {
	return reply.view("products.ejs");
});

// API endpoint to get products
fastify.get("/api/products", async (_, reply) => {
	return reply.send(products);
});

try {
	await fastify.listen({ port: 3000 });
	console.log(`Server running at http://localhost:3000`);
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
