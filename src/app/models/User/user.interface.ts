export interface User {
  userId: string;
  password: string;
  isPasswordChanged: boolean;
  role: "student" | "mentor" | "admin";
  status: "active" | "blocked" | "pending";
  isDeleted: boolean;
}
