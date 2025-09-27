
import { studentServices } from "./student.services"



import { Request, Response } from "express";
const getAllStudentsController = async (req: Request, res: Response) => {
    try {
        const result = await studentServices.getAllStudentServices();
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server ERror", error
        })
    }
}
export const studentController = {
    getAllStudentsController,
} 