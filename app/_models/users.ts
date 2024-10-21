import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export type User = {
  id: number;
  username:string;
  timestamp: string;
  name:string;
  first_name:string;
  second_name?:string;
  role_id: number;
  birthday: string;
};

