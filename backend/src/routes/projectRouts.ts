import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { UserController } from "../controllers/UserController";
import { ProjectController } from "../controllers/ProjectController";
import { validateUserExist } from "../middleware/project";

const projectsRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.addHook("preHandler", validateUserExist);
  fastify.post("/user/:userId", ProjectController.createProject);
  fastify.get("/:taskId/user/:userId", ProjectController.createProject);
};

export default projectsRoutes;
