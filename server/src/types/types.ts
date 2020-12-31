import { Request } from "express";

export interface JobType {
  generatedId: number;
  id?: string;
  jobOrigin?: string;
  applicationStatus?: string;
  note?: string;
  created_at?: string;
  description?: string;
  how_to_apply?: string;
  company_url?: string;
  company_logo?: string;
  type?: string;
  url?: string;
  company: string;
  location: string;
  title: string;
}

interface UserType {
  generatedId: number,
  id: string,
  name: string,
  email: string
}

export interface IUserRequest extends Request {
  user: UserType
}