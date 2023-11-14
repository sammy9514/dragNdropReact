import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1:27017/kids";

export const mainConnection = async () => {
  try {
    await mongoose.connect(URL).then(() => {
      console.log("database is connected");
    });
  } catch (error) {
    console.log(error);
  }
};
