export interface IJob {
  id: number;
  title: string;
  location: string;
  companyName: string;
  postedAt: string;
  description: string;
}

export type AppState = {
  alertReducer: AlertState,
  jobsReducer: JobsState,
  authReducer: UserState,
  uiReducer: UIState
}
//TREBA DA GI PRETVORAM SITE LOKALNI TYPES VO GLOBALNI, PRIMER(JobDetails.tsx, JobController.ts)
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
export type JobType = {
  id: number;
  title: string;
  location: string;
  companyName: string;
  postedAt: string;
  description: string;
}
export type JobsState = {
  jobs: JobType1[],
  jobOrigin: string,
  backendMsg: string,
  jobDetail: JobType1 | null,
  loading: boolean,
  hasErrors: boolean
}

export type JobAction = {
  type: string
  payload?: any
}
export type DispatchJobType = (args: JobAction) => JobAction



interface IUser {
  id: number
  title: string
  body: string
  name: string;
  email: string;
  password: string;
}
export type UserState = {
  token: string | null,
  user: object | null,
  isAuthenticated: boolean,
  loading: boolean
}
export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
}
export type UserAction = {
  type: string
  payload?: any
}
export type DispatchUserActionType = (args: UserAction) => UserAction



export type UIState = {
  darkMode: boolean
}
export type UIAction = {
  type: string,
  payload: boolean
}
export type DispatchDarkModeActionType = (args: UIAction) => UIAction


export interface IAlert {
  msg: string,
  alertType: string,
  id: string
}
export type AlertState = IAlert[]
export type AlertAction = {
  type: string,
  payload: IAlert | string
}
export type DispatchAlertActionType = (args: AlertAction) => AlertAction