import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import LoadMore from "../LoadMore/LoadMore";
import { changeJobOrigin, clearJobs, fetchJobs, fetchMoreJobs } from '../../../redux/jobs/jobsActions';
import Search from '../Search/Search';
import { AppState } from "../../../redux/types/types";

export interface SearchState {
  desc: string,
  loc: string,
  full: boolean,
  pageNum: number,
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

interface SearchContainerProps {
  jobs: JobType1[],
  loading: boolean,
  jobOrigin: string,
  changeJobOrigin: (jobOrigin: string) => void,
  clearJobs: () => void,
  fetchJobs: (desc: string, loc: string, full: boolean, jobOrigin: string) => void,
  fetchMoreJobs: (desc: string, loc: string, full: boolean, pageNum: number, jobOrigin: string) => void
}

const SearchContainer: React.FC<SearchContainerProps> = ({ children, jobs, loading, jobOrigin, changeJobOrigin, clearJobs, fetchJobs, fetchMoreJobs }) => {


  const [values, setValues] = useState<SearchState>({
    desc: '',
    loc: '',
    full: false,
    pageNum: 1,
  })


  const changeSetValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name === "full"){
      setValues({
        ...values,
        full: !values.full
      });
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }
  }
  const onJobOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeJobOrigin(e.target.value)
  }
  

  const loadMoreJobs = () => {
    setValues({
      ...values,
      pageNum: values.pageNum + 1
    })
    fetchMoreJobs(values.desc, values.loc, values.full, values.pageNum, jobOrigin);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs(values.desc, values.loc, values.full, jobOrigin);
    resetState();
  }

  const handleClear = () => {
    resetState();
  }

  
  const resetState = (): void => {
    //Clear Job State
    clearJobs();
    setValues({
      desc: '',
      loc: '',
      full: false,
      pageNum: 1,
    })
  }


  return (
    <div className = "SearchContainer">
      <Search values = {values} changeSetValues = {changeSetValues} changeJobOrigin = {onJobOriginChange} handleSubmit = {handleSubmit} handleClear = {handleClear} />
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