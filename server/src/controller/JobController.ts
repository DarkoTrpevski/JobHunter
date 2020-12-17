import { Response } from "express";
import { getManager } from "typeorm";
import { Job } from "../entity/Job";
import { User } from "../entity/User";
import { IUserRequest } from "../types/IUserRequest";

interface JobType {
  jobOrigin: string;
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

export class JobController {

  constructor(){}

  public saveJob = async(req: IUserRequest, res: Response) => {

    try {
      const { jobOrigin, id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo }: JobType = req.body;
      // const { title, location, companyName, postedAt, jobOrigin, description } = req.body;
  
      //Create User repository
      const userRepository = getManager().getRepository(User);
      //Create Job repository
      const jobRepository = getManager().getRepository(Job);
  
      //Get the the user from the repository using the user id from the middleware
      const user = await userRepository.findOne(req.user);
      
      //Create a new Job Entity Object
      const job = jobRepository.create();
      job.jobOrigin = jobOrigin;

      //Job-User Relation
      job.user = user;

      job.id = id;
      job.type = type;
      job.url = url;
      job.created_at = created_at;
      job.company = company;
      job.company_url = company_url;
      job.location = location;
      job.title = title;
      job.description = description;
      job.how_to_apply = how_to_apply;
      job.company_logo = company_logo;
      // job.title = title;
      // job.location = location;
      // job.company = company;
      // job.created_at = created_at;
      // job.jobOrigin = jobOrigin;
      // job.description = description;
      // job.user = user;
  
      //Save Job in DB
      await jobRepository.save(job);

      //POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING
      res.json(job);
      //POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING


      // res.json({message: "Successfully Saved."})
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  
  }

  public getSavedJobs = async(req: any, res: Response) => {
  // public getSavedJobs = async(req: IUserRequest, res: Response) => {
    try {
      //Create Job repository
      const jobRepository = getManager().getRepository(Job);
      console.log('Inside getSavedJobs action, request user id is: ', req.user.id)
      const jobs = await jobRepository.find({
        relations: ["user"],
        where: {
          user: {
            generatedId: req.user.id
          }
        }
      });
      res.status(200).json(jobs);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }

}