import React from "react";
import { connect } from 'react-redux';
import LoadMore from "../LoadMore/LoadMore";
import { changeJobOrigin, clearJobs, fetchJobs, fetchMoreJobs } from '../../../redux/jobs/jobsActions';
import Search from '../Search/Search';
import { AppState, JobType1 } from "../../../redux/types/types";
import useForm from "../../../hooks/useForm";


interface SearchContainerProps {
  jobs: JobType1[],
  loading: boolean,
  jobOrigin: string,
  changeJobOrigin: (jobOrigin: string) => void,
  clearJobs: () => void,
  fetchJobs: (desc: string, loc: string, full: boolean, jobOrigin: string) => void,
  fetchMoreJobs: (desc: string, loc: string, full: boolean, pageNum: number, jobOrigin: string) => void
}

const initialValues = {
  desc: '',
  loc: '',
  full: false,
  pageNum: 1,
}

const SearchContainer: React.FC<SearchContainerProps> = ({ children, jobs, loading, jobOrigin, changeJobOrigin, clearJobs, fetchJobs, fetchMoreJobs }) => {

  const resetState = (): void => {
    //Clear Job State
    clearJobs();
    //Clear Form State
    setValues(initialValues)
  }

  const [values, setValues, handleChange] = useForm(initialValues);

  const onJobOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeJobOrigin(e.target.value)
  }

  const handleClear = () => {
    resetState();
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs(values.desc, values.loc, values.full, jobOrigin);
    // resetState();
  }

  const loadMoreJobs = () => {
    setValues({
      ...values,
      pageNum: values.pageNum + 1
    })
    fetchMoreJobs(values.desc, values.loc, values.full, values.pageNum, jobOrigin);
  }

  return (
    <div className = "SearchContainer">
      <Search values = {values} changeSetValues = {handleChange} changeJobOrigin = {onJobOriginChange} handleSubmit = {handleSubmit} handleClear = {handleClear} />
      {children}
      <LoadMore jobs = {jobs} loading = {loading} loadMoreJobs = {loadMoreJobs} />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs,
  loading: state.jobsReducer.loading,
  jobOrigin: state.jobsReducer.jobOrigin
})

export default connect(mapStateToProps, { changeJobOrigin, clearJobs, fetchJobs, fetchMoreJobs })(SearchContainer);