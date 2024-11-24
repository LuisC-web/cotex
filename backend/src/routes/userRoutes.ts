import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { UserController } from "../controllers/UserController";

const userRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post("/", UserController.createUser);
  fastify.get("/", UserController.getUsers);
  fastify.get("/:id", UserController.getUserById);
  fastify.get("/mail/:mail", UserController.getUserByMail);
  fastify.get("/user/:user", UserController.getUserByUser);
};

export default userRoutes;
