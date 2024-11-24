import { Document, model, PopulatedDoc, Schema, Types } from "mongoose";
import { IUser } from "./User.model";
const pdf_render = {
  pdfLateX: "pdfLateX",
  LaTex: "LaTex",
  XeLateX: "XeLateX",
  LuaLateX: "LuaLateX",
} as const;
export type PdfRender = (typeof pdf_render)[keyof typeof pdf_render];

export interface IProject extends Document {
  name: string;
  description: string;
  admin: Types.ObjectId;
  refPdf: string;
  priv: boolean;
  version_latex: string;
  pdf_render: PdfRender;
  colaboradores: PopulatedDoc<IUser & Document>[];
}

const SchemaProject: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    admin: {
      type: Types.ObjectId,
      ref: "User",
    },
    priv: { type: Boolean, default: false },
    refPdf: { type: String, required: true, trim: true },
    version_latex: {
      type: String,
      trim: true,
      default: "latest",
    },
    pdf_render: {
      type: String,
      enum: Object.values(pdf_render),
      default: pdf_render.pdfLateX,
    },
    colaboradores: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
const Project = model<IProject>("Project", SchemaProject);
export default Project;
