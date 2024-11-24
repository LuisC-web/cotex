import { FastifyRequest, FastifyReply } from "fastify";
import User, { IUser } from "../models/User.model";
declare module "fastify" {
  interface FastifyRequest {
    user: IUser;
  }
}
export async function validateUserExist(
  req: FastifyRequest<{
    Params: {
      userId: string;
    };
  }>,
  reply: FastifyReply
) {
  try {
    const { userId } = req.params;
    const userExist = await User.findById(userId);
    if (!userExist) {
      return reply.status(404).send({ message: "User not found" });
    }
    req.user = userExist as IUser;
  } catch (error) {
    reply.status(500).send({ message: "Internal Server Error" });
  }
}
