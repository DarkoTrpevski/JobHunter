interface IJob {
  id: number;
  title: string;
  location: string;
  companyName: string;
  postedAt: string;
  description: string;
}
export type JobsState = {
  jobs: IJob[],
  backendMsg: string,
  jobDetail: object | null,
  loading: boolean,
  hasErrors: boolean
}
export type JobType = {
  id: number;
  title: string;
  location: string;
  companyName: string;
  postedAt: string;
  description: string;
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
  currentUser: object | null,
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
export type DispatchUsertype = (args: UserAction) => UserAction



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