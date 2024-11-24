import Fastify from "fastify";
import { connectDB } from "./cofing/db";
const app = Fastify();
connectDB();
export default app;
