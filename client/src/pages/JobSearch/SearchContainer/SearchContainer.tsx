import React, { useState } from "react";
import { connect } from 'react-redux';
import LoadMore from "../LoadMore/LoadMore";
import { clearJobs, fetchJobs, fetchMoreJobs } from '../../../redux/jobs/jobsActions';
import Search from '../Search/Search';
import { Job } from "../types";

export interface SearchState {
  desc: string,
  loc: string,
  full: boolean,
  pageNum: number
}

interface SearchContainerProps {
  jobs: Job[],
  loading: boolean,
  clearJobs: () => void,
  fetchJobs: (desc: string, loc: string, full: boolean) => void,
  fetchMoreJobs: (desc: string, loc: string, full: boolean, pageNum: number) => void
}

const SearchContainer: React.FC<SearchContainerProps> = ({ children, jobs, loading, clearJobs, fetchJobs, fetchMoreJobs }) => {

  const [values, setValues] = useState<SearchState>({
    desc: '',
    loc: '',
    full: false,
    pageNum: 1
  })

  const changeSetValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('SearchContainer , name is:', name);
    console.log('SearchContainer , value is:', value);
    if(name !== "full"){
      setValues({
        ...values,
        [name]: value
      })
    } else {
      setValues({
        ...values,
        full: !values.full
      })
    }
  }

  const loadMoreJobs = () => {
    setValues({
      ...values,
      pageNum: values.pageNum + 1
    })
    fetchMoreJobs(values.desc, values.loc, values.full, values.pageNum);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit in SearchContainer clicked');
    clearJobs();
    fetchJobs(values.desc, values.loc, values.full);
    resetState();
  }

  const handleClear = () => {
    console.log('Clear clicked!!');
    clearJobs();
    resetState();
  }

  
  const resetState = (): void => {
    setValues({
      desc: '',
      loc: '',
      full: false,
      pageNum: 1
    })
  }


  return (
    <div className = "SearchContainer">
      <Search values = {values} changeSetValues = {changeSetValues} handleSubmit = {handleSubmit} handleClear = {handleClear} />
      {children}
      <LoadMore jobs = {jobs} loading = {loading} loadMoreJobs = {loadMoreJobs} />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  jobs: state.jobsReducer.jobs,
  loading: state.jobsReducer.loading
})

export default connect(mapStateToProps, { clearJobs, fetchJobs, fetchMoreJobs })(SearchContainer);