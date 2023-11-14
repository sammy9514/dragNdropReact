import { Request, Response } from "express";
import kidsModel from "../model/kidsModel";

export const createData = async (req: Request, res: Response) => {
  try {
    const { name, image } = req.body;

    let kids = await kidsModel.create({ name, image });

    return res.status(201).json({
      message: "created",
      data: kids,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};

export const viewData = async (req: Request, res: Response) => {
  try {
    const kids = await kidsModel.find();

    res.status(200).json({
      message: "done",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed",
    });
  }
};

export const viewSortedData = async (req: Request, res: Response) => {
  try {
    let kids = await kidsModel.find().sort({ name: 1 });

    return res.status(200).json({
      message: "read",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed",
    });
  }
};

export const deleteData = async (req: Request, res: Response) => {
  try {
    let kids = await kidsModel.deleteMany({});

    res.status(200).json({
      message: "deleted",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed",
    });
  }
};
