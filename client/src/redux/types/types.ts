/**
 * STATES
 */
export type AppState = {
  alertReducer: AlertState,
  jobsReducer: JobsState,
  authReducer: UserState,
  uiReducer: UIState
}
export type UserState = {
  token: string | null,
  user: object | null,
  isAuthenticated: boolean,
  loading: boolean
}
export type JobsState = {
  jobs: JobType1[],
  savedJobs: JobType1[],
  jobOrigin: string,
  backendMsg: string,
  jobDetail: JobType1 | null,
  jobEdit: JobType1 | null,
  loading: boolean,
  hasErrors: boolean
}
export type UIState = {
  darkMode: boolean
}
export type AlertState = AlertType[]


/**
 * TYPES
 */
export type UserType = {
  generatedId: number;
  jwtToken?: string;
  name: string;
  email: string;
  password: string;
}
export interface JobType1 {
  generatedId?: number;
  id?: string;
  jobOrigin?: string;
  applicationStatus?: string;
  note?: string;
  created_at?: string;
  description?: string;
  how_to_apply?: string;
  company_url?: string;
  company_logo?: string;
  type?: string;
  url?: string;
  company: string;
  location: string;
  title: string;
}
export interface AlertType {
  msg: string,
  alertType: string,
  id: string
}

/**
 * ACTION TYPES
 */
export type UserAction = {
  type: string
  payload?: UserType
}
export type JobAction = {
  type: string
  payload?: any
}
export type UIAction = {
  type: string,
  payload: boolean
}
export type AlertAction = {
  type: string,
  payload: AlertType | string
}

/**
 * DISPATCH TYPES
 */
export type DispatchJobType = (args: JobAction | ((dispatch: any) => void)) => JobAction
export type DispatchUserActionType = (args: UserAction | ((dispatch: any) => void)) => UserAction
export type DispatchDarkModeActionType = (args: UIAction | ((dispatch: any) => void)) => UIAction
export type DispatchAlertActionType = (args: AlertAction | ((dispatch: any) => void)) => AlertAction