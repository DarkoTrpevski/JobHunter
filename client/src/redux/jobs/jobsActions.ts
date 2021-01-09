import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { GET_JOBS, CHANGE_JOB_ORIGIN, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, SHOW_EDIT_JOB, CLEAR_EDIT_JOB, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE, SAVE_JOB, GET_SAVED_JOBS } from './jobActionTypes';
import { DispatchJobType, JobType1 } from '../types/types';


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

export const showEditJob = (job: JobType1) => (dispatch: DispatchJobType) => {
  try {
    dispatch({
      type: SHOW_EDIT_JOB,
      payload: job
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



export const fetchJobs = (description: string = '', location: string = '', full_time: boolean = false, jobOrigin: string = "", page: number = 1) => async(dispatch: DispatchJobType) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  dispatch({ type: GET_JOBS });

  console.log('Inside jobsActions fetchJobs, the params are: ', description, location, full_time, page);

  setTimeout(async() => {
    try {
      const res: Response = await fetch(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      const data: JobType1 = await res.json();
  
      dispatch({ type: GET_JOBS_SUCCESS, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: GET_JOBS_FAILURE });
    }
  }, 5000)

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
    const data: JobType1 = await res.json();

    dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: LOAD_MORE_JOBS_FAILURE });
  }
}


export const clearJobs = () => (dispatch: DispatchJobType) => {
  try {
    dispatch({ type: CLEAR_JOBS })
  } catch (err) {
    console.log(err.message);
  }
};


export const saveJob = (job: JobType1, origin?: string) => async(dispatch: DispatchJobType) => {
  try {
    console.log('Inside jobsActions saveJobToDash, job is:', job);
    /*CONTACT BACKEND TO SAVE JOB TO DATABASE*/
    const URL = `http://localhost:4000/jobs`;
  
    const config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }
  
    console.log('Inside saveJob, job before stringify: ', job);
    if(origin) {
      job.jobOrigin = origin;
    }
    //If we use saveJob for saving custom job, default it to full time
    if(job.type === null) {
      job.type = "Full Time";
    }
    console.log('Inside saveJob, after origin added: ', job);

    const body = JSON.stringify(job);

    console.log('Inside saveJob, job body after stringify: ', body)

    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    const res: AxiosResponse = await axios.post(URL, body, config);

    console.log('Inside saveJob, response data is: ', res.data);  

    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    //TEMPORARILY THIS, LATER WE WILL GET MESSAGE AS RESPONSE, AND WE WILL SHOW THAT AS AN ALERT
    dispatch({ type: CLEAR_EDIT_JOB });
    dispatch(getSavedJobs())
    
  } catch (err) {
    console.log(err.message);
    console.error(err);
  }
};


export const editJob = (job: JobType1) => async(dispatch: DispatchJobType) => {

  try {
    console.log('Inside jobsActions editJob from dashboard, job is:', job);

    const URL = `http://localhost:4000/jobs`;
  
    const config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }
    console.log('Inside editJob, job before stringify: ', job);

    const body = JSON.stringify(job);
    // console.log('Inside editJob, job body after stringify: ', body)
    const res: AxiosResponse = await axios.put(URL, body, config);
    console.log('Inside editJob, response data is: ', res.data);  

    dispatch({
      type: CLEAR_EDIT_JOB,
      payload: null
    });
    dispatch(getSavedJobs())
    
  } catch (err) {
    console.log(err.message);
    console.error(err);
  }
};

export const getSavedJobs = () => async(dispatch: DispatchJobType) => {
  try {
    const URL = `http://localhost:4000/jobs`;
    const config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }

    const res: AxiosResponse = await axios.get(URL, config);
    console.log('Inside getSavedJobs response is : ', res);
    console.log('Inside getSavedJobs, response data is: ', res.data);  

    dispatch({
      type: GET_SAVED_JOBS,
      payload: res.data
    });

  } catch (err) {
    console.log(err.message);
    console.error(err);
  }
};