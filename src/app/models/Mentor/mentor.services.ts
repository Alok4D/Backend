import { mentorData } from "./mentor.interface";
import { Mentors } from "./mentor.model"

const getAllMentors = async () => {
  const mentor = await Mentors.find();
 
  console.log("Mentor data", mentor)
}

const createMentor = async(payload: mentorData) => {
  const data = await Mentors.create(payload)
  return data;
}


export const MentorsServices = {
  getAllMentors,
  createMentor
}

