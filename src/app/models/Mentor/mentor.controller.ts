
import { Request, Response } from "express";
import { MentorsServices } from "./mentor.services";


const getAllMentorsController = async (req: Request, res: Response) => {
  try {
    const result = await MentorsServices.getAllMentors();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const mentorController = {
    getAllMentorsController
}