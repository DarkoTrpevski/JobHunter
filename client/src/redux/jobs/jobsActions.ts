import { Dispatch } from 'redux';
import { Job } from '../../pages/JobSearch/types';
import { DispatchJobType, JobType } from '../types/types';
import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE, SAVE_JOB_TO_DASH } from './jobActionTypes';

const allowCors = 'https://cors-anywhere.herokuapp.com';
const baseUrl = 'https://jobs.github.com/positions.json';

export const clearJobs = () => (dispatch: DispatchJobType) => {
  try {
    dispatch({ type: CLEAR_JOBS })
    // dispatch({ type: CLEAR_JOBS })
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchJobs = (description: string = '', location: string = '', full_time: boolean = false, page: number = 1) => async(dispatch: Dispatch) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  console.log('Inside jobsActions fetchJobs, URL is: ', URL);
  dispatch({ type: GET_JOBS });
  // dispatch({ type: GET_JOBS });

  console.log('Inside jobsActions fetchJobs, the params are: ', description, location, full_time, page);

  try {
    const res: Response = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    // const data: any = await res.json();
    const data: JobType = await res.json();

    dispatch({ type: GET_JOBS_SUCCESS, payload: data });
    // dispatch({ type: GET_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: GET_JOBS_FAILURE });
    // dispatch({ type: GET_JOBS_FAILURE });
  }
}

export const fetchMoreJobs = (description = '', location = '', full_time = false, page = 1) => async(dispatch: DispatchJobType) => {
  const URL = `${allowCors}/${baseUrl}?description=${description}&location=${location}&full_time=${full_time ? 'on' : ''}&page=${page}`;
  console.log('Inside jobsActions fetchMoreJobs, URL is: ', URL);
  dispatch({ type: GET_JOBS });
  // dispatch({ type: GET_JOBS });

  try {
    const res: Response = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    // const data: any = await res.json();
    const data: JobType = await res.json();

    dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
    // dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: LOAD_MORE_JOBS_FAILURE });
    // dispatch({ type: LOAD_MORE_JOBS_FAILURE });
  }
}

export const showDetails = (id: number | string) => (dispatch: DispatchJobType) => {
  try {
    console.log('Inside jobsActions showDetails, id is:', id);
    dispatch({
      // type: SHOW_DETAILS,
      type: SHOW_DETAILS,
      payload: id
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const saveJob = (job: Job) => async(dispatch: DispatchJobType) => {
  try {
    console.log('Inside jobsActions saveJobToDash, job is:', job);
    /*CONTACT BACKEND TO SAVE JOB TO DATABASE*/
    const URL = `http://localhost:4000/jobs`;
  
    try {
      const res: Response = await fetch(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      // const data: any = await res.json();
      const data: JobType = await res.json();
  
      dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
      // dispatch({ type: LOAD_MORE_JOBS_SUCCESS, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: LOAD_MORE_JOBS_FAILURE });
      // dispatch({ type: LOAD_MORE_JOBS_FAILURE });
    }
    dispatch({
      type: SAVE_JOB_TO_DASH,
      payload: job
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};