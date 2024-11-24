import type { FastifyRequest, FastifyReply } from "fastify";
import User from "../models/User.model";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
export class UserController {
  static async createUser(
    req: FastifyRequest<{
      Body: {
        mail: string;
        user: string;
        password: string;
        token: string;
      };
    }>,
    reply: FastifyReply
  ) {
    try {
      const { user, mail, password } = req.body;
      const userExist = await User.findOne({ $or: [{ mail }, { user }] });
      if (userExist) {
        return reply.code(400).send({ msg: "El usuario o correo ya existe" });
      }
      req.body.password = await argon2.hash(password);
      req.body.token = jwt.sign({ user, mail }, process.env.SECRET_KEY, {
        expiresIn: "20m",
      });
      console.log(req.body);

      await User.create(req.body);
      reply.code(201).send({ msg: "Usuario creado" });
    } catch (error) {
      console.log(error.message);

      reply.code(500).send({ msg: "Se produjo un error" });
    }
  }
  static async getUserById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = req.params;
      const userExist = await User.findById(id, {
        password: 0,
        token: 0,
        confirm: 0,
      });
      if (!userExist) {
        return reply.code(400).send({ msg: "El usuario no existe" });
      }
      return reply.code(201).send(userExist);
    } catch (error) {
      console.log(error.message);

      return reply.code(500).send({ msg: "Se produjo un error" });
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
  static async getUserByMail(
    req: FastifyRequest<{ Params: { mail: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { mail } = req.params;
      const userExist = await User.findOne(
        { mail },
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
