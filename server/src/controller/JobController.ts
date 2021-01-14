import { Response } from "express";
import { getManager } from "typeorm";
import { Job } from "../entity/Job";
import { User } from "../entity/User";
import { JobType, IUserRequest } from "../types/types";


export class JobController {

  constructor(){}

  public saveJob = async(req: any, res: Response) => {
    const { jobOrigin, id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo }: JobType = req.body;
    console.log('Inside saveJob, the request user generatedId is : ', req.user.generatedId)
    console.log('Inside saveJob, the request user id is : ', req.user.id)
    try {
  
      //Create User repository
      const userRepository = getManager().getRepository(User);
      //Create Job repository
      const jobRepository = getManager().getRepository(Job);
  
      //Get the the user from the repository using the user id from the middleware
      const user = await userRepository.findOne(req.user.id);
      
      //Create a new Job Entity Object
      const job = jobRepository.create();

      //Job-User Relation
      job.user = user;
      
      job.id = id;
      job.origin = jobOrigin;
      job.created_at = created_at;
      job.description = description;
      job.how_to_apply = how_to_apply;
      job.company_url = company_url;
      job.company_logo = company_logo;
      job.type = type;
      job.url = url;
      job.company = company;
      job.location = location;
      job.title = title;
  
      //Save Job in DB
      await jobRepository.save(job);

      res.json({ message: "Job successfully saved." })
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  
  }
  public editJob = async(req: any, res: Response) => {

    const { generatedId, jobOrigin, applicationStatus, note,  id, type, url, created_at, company, company_url, location, title, description, how_to_apply, company_logo }: JobType = req.body;
    /*
      *STEPS FOR EDITING JOB(NOT-SURE)
      *1)GET THE GENERATED ID FROM JOB.
      *2)GRAB THE JOB FROM THE JOB REPO USING THE ID.
      *3)EITHER OVERWRITE THE OLD JOB WITH NEW JOB AS A WHOLE, OR USE THE PROPERTIES OF THE NEW JOB TO REPLACE THE ONE FROM THE OLD JOB.
      *4)SAVE THE JOB BACK
    */
    console.log('Inside editJob, the request body is: ', req.body)
    console.log('Inside editJob, the request body generatedId is : ', generatedId)
    console.log('Inside editJob, the applicationStatus is : ', applicationStatus)
    console.log('Inside editJob, the note is : ', note)
    try {
      //Create Job repository
      const jobRepository = getManager().getRepository(Job);
      const foundJob = await jobRepository.findOne({ where: {generatedId: generatedId} })
      // const foundJob = await jobRepository.findOne({ generatedId: generatedId })

      foundJob.generatedId = generatedId
      foundJob.id = id;
      foundJob.origin = jobOrigin;

      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)
      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)
      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)
      foundJob.applicationStatus = applicationStatus;
      foundJob.note = note;
      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)
      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)
      //TUKA TREBA DA GI PROVERAM VREDNOSTITE NA OVIE(applicationStatus, note)

      foundJob.created_at = created_at;
      foundJob.description = description;
      foundJob.how_to_apply = how_to_apply;
      foundJob.company_url = company_url;
      foundJob.company_logo = company_logo;
      foundJob.type = type;
      foundJob.url = url;
      foundJob.company = company;
      foundJob.location = location;
      foundJob.title = title;
  
      // //Save Job in DB
      // await jobRepository.save(job);
      await jobRepository.update({ generatedId: generatedId }, foundJob)

      //POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING
      // res.json(foundJob);
      //POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING/POSTMAN TESTING


      res.json({ message: "Job successfully edited." })
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