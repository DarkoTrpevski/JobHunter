import { GET_JOBS, CHANGE_JOB_ORIGIN, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE, SAVE_JOB, GET_SAVED_JOBS, EDIT_JOB } from './jobActionTypes';
import { JobAction, JobsState } from '../types/types';

const initialState: JobsState = {
  jobs: [],
  savedJobs: [],
  jobOrigin: '',
  backendMsg: "",
  jobDetail: null,
  jobEdit: null,
  loading: false,
  hasErrors: false,
};

const showDetails = (jobs: any, id: number | string) => {
  try {
    let jobDetail =  jobs.find((item: any) => item.id === id);
    return jobDetail;
  } catch (err) {
    console.log(err.message)
  }
};

const jobsReducer = (state: JobsState = initialState, action: JobAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        loading: true
      };
    case CHANGE_JOB_ORIGIN:
      return {
        ...state,
        jobOrigin: payload
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        jobs: payload
      };
    case LOAD_MORE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        jobs: [...state.jobs, ...payload]
      }
    case GET_JOBS_FAILURE:
    case LOAD_MORE_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
        jobDetail: null,
        loading: false,
        jobOrigin: '',
        hasErrors: false,
      };
    case SHOW_DETAILS:
      return {
        ...state,
        jobDetail: showDetails(state.jobs, payload)
      }
    /*CONTACT BACKEND TO SAVE JOB TO DATABASE*/
    case SAVE_JOB:
      return {
        ...state,
        backendMsg: payload
      }
    case EDIT_JOB:
      return {
        ...state,
        jobEdit: payload
      }
    case GET_SAVED_JOBS:
      return {
        ...state,
        savedJobs: payload
      }
    default:
      return state;
  }
}

export default jobsReducer;