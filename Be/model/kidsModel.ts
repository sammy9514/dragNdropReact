import { Document, Schema, model } from "mongoose";

interface iData {
  name: string;
  image: string;
}

interface iKidsData extends iData, Document {}

const kidsModel = new Schema<iKidsData>(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<iKidsData>("kids", kidsModel);
