import { Mentors } from "./mentor.model"

const getAllMentors = async () => {
  const mentor = await Mentors.find();
 
  console.log("Mentor data", mentor)
}
export const MentorsServices = {
  getAllMentors
}

