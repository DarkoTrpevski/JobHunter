import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, CLEAR_JOBS, SHOW_DETAILS, LOAD_MORE_JOBS_SUCCESS, LOAD_MORE_JOBS_FAILURE, SAVE_JOB_TO_DASH } from './jobActionTypes';
import { JobAction, JobsState } from '../types/types';

const initialState: JobsState = {
  jobs: [],
  backendMsg: "",
  jobDetail: null,
  loading: false,
  hasErrors: false,
};

const showDetails = (jobs: any, id: number | string) => {
  let jobDetail =  jobs.find((item: any) => item.id === id);
  return jobDetail;
};

const jobsReducer = (state: JobsState = initialState, action: JobAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        loading: true
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
        hasErrors: false,
      };
    case SHOW_DETAILS:
      return {
        ...state,
        jobDetail: showDetails(state.jobs, payload)
      }
    /*CONTACT BACKEND TO SAVE JOB TO DATABASE*/
    case SAVE_JOB_TO_DASH:
      return {
        ...state,
        backendMsg: payload
      }
    default:
      return state;
  }
}

export default jobsReducer;