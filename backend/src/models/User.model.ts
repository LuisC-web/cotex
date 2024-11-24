import { Document, model, PopulatedDoc, Schema, Types } from "mongoose";
import { IProject } from "./Project.model";

export interface IUser extends Document {
  user: string;
  mail: string;
  proyects: PopulatedDoc<IProject & Document>[];
  token: string;
  password: string;
  confirm: boolean;
}
const SchemaUser: Schema = new Schema(
  {
    user: { type: String, required: true, trim: true },
    mail: { type: String, required: true, trim: true },
    proyects: [
      {
        type: Types.ObjectId,
        ref: "Project",
      },
    ],
    token: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
    confirm: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const User = model<IUser>("User", SchemaUser);
export default User;
