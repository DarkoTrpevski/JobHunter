import * as express from "express";
import { JobController } from "../controller/JobController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
const jobController = new JobController();
//Save a job
router.post("/", authMiddleware, jobController.saveJob);
//Edit a job
router.put("/", authMiddleware, jobController.editJob);
//Get all jobs from current user
router.get("/", authMiddleware, jobController.getSavedJobs);
export default router;