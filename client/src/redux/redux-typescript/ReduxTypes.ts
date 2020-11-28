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
  currentUser: object | null
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
export type DispatchUserype = (args: UserAction) => UserAction