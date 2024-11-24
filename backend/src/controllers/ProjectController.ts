import { FastifyReply, FastifyRequest } from "fastify";
import User from "../models/User.model";
import Project from "../models/Project.model";
import createProjectFile from "../helpers/createProjectFile";

export class ProjectController {
  static async createProject(
    req: FastifyRequest<{
      Body: {
        name: string;
        description: string;
        priv: boolean;
        version_latex: string;
        pdf_render: string;
        admin: string;
        refPdf: string;
      };
    }>,
    reply: FastifyReply
  ) {
    try {
      req.body.admin = req.user.id;
      const path = await createProjectFile(req.body.name, req.body.admin);
      req.body.refPdf = path;
      if (!req.body.refPdf) {
        return reply
          .code(500)
          .send({ msg: "Se produjo un error al crear el directorio" });
      }
      const project = await Project.create(req.body);

      return reply.code(201).send(project);
    } catch (error) {
      console.log(error.message);

      reply.code(500).send({ msg: "Se produjo un error" });
    }
  }

  static async getUsers(req: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await User.find({}, { password: 0, token: 0, confirm: 0 });
      return reply.code(201).send(users);
    } catch (error) {
      console.log(error.message);
      return reply.code(500).send({ msg: "Se produjo un error" });
    }
  }

  static async getUserByUser(
    req: FastifyRequest<{ Params: { user: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { user } = req.params;

      const userExist = await User.findOne(
        { user },
        { password: 0, token: 0, confirm: 0 }
      );
      if (!userExist) {
        return reply.code(400).send({ msg: "El usuario no existe" });
      }
      return reply.code(201).send(userExist);
    } catch (error) {
      console.log(error.message);
      return reply.code(500).send({ msg: "Se produjo un error" });
    }
  }
}
