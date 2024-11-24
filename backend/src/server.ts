import Fastify from "fastify";
import { connectDB } from "./config/db";
import fastify from "fastify";
import userRoutes from "./routes/userRoutes";
import projectsRoutes from "./routes/projectRouts";
const app = Fastify({ logger: true });

app.register(userRoutes, { prefix: "/api/v1/user" });
app.register(projectsRoutes, { prefix: "/api/v1/project" });

connectDB();
export default app;
