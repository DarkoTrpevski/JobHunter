import { Dispatch } from 'redux';
import { DispatchJobType, JobType } from '../types/types';
import { GET_JOBS, CHANGE_JOB_ORIGIN, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE, SAVE_JOB } from './jobActionTypes';
import axios from 'axios';

const allowCors = 'https://cors-anywhere.herokuapp.com';
const baseUrl = 'https://jobs.github.com/positions.json';


export const showDetails = (id: number | string) => (dispatch: DispatchJobType) => {
  try {
    dispatch({
      type: SHOW_DETAILS,
      payload: id
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const changeJobOrigin = (jobOrigin: string) => (dispatch: DispatchJobType) => {
  try {
    dispatch({
      type: CHANGE_JOB_ORIGIN,
      payload: jobOrigin
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};


export const clearJobs = () => (dispatch: DispatchJobType) => {
  try {
    dispatch({ type: CLEAR_JOBS })
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchJobs = (description: string = '', location: string = '', full_time: boolean = false, jobOrigin: string = "", page: number = 1) => async(dispatch: Dispatch) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  dispatch({ type: GET_JOBS });

  console.log('Inside jobsActions fetchJobs, the params are: ', description, location, full_time, page);

  try {
    const res: Response = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data: JobType = await res.json();

    dispatch({ type: GET_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: GET_JOBS_FAILURE });
  }
}

export const fetchMoreJobs = (description: string = '', location: string = '', full_time: boolean = false, page: number = 1, jobOrigin: string) => async(dispatch: DispatchJobType) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  dispatch({ type: GET_JOBS });

  try {
    const res: Response = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data: JobType = await res.json();

    dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: LOAD_MORE_JOBS_FAILURE });
  }
}

interface JobType1 {
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

export const saveJob = (job: JobType1, origin: string) => async(dispatch: DispatchJobType) => {
  try {
    console.log('Inside jobsActions saveJobToDash, job is:', job);
    /*CONTACT BACKEND TO SAVE JOB TO DATABASE*/
    const URL = `http://localhost:4000/jobs`;
  
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }
  
    console.log('Inside saveJob, job before stringify: ', job);
    //TREBA VO SEARCH CONTAINER DA MENJAM JOB ORIGIN STATE
    //TREBA VO SEARCH CONTAINER DA MENJAM JOB ORIGIN STATE
    //TREBA VO SEARCH CONTAINER DA MENJAM JOB ORIGIN STATE
    job.jobOrigin = origin;
    console.log('Inside saveJob, after origin added: ', job);
    // const body = JSON.stringify(job);
    // console.log('Inside saveJob, job body after stringify: ', body)
    const res = await axios.post(URL, job, config);
    console.log('Inside saveJob, response data is: ', res.data);  

    dispatch({
      type: SAVE_JOB,
      payload: job
    });
  } catch (err) {
    console.log(err.message);
    console.error(err);
  }
};