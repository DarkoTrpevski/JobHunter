import React from 'react';
import { connect } from 'react-redux';
import { AppState, JobType1 } from '../../../redux/types/types';
import JobItem from './JobItem/JobItem';

interface ResultsProps {
  jobs: JobType1[],
  loading: boolean
}

const SearchResults: React.FC<ResultsProps> = ({ jobs, loading }) => {
  return (
    <div className="Results" style = {{width: '100%', marginTop: '4rem'}}>
      <div className="md-container">
        {
        loading ? new Array(20).fill(null).map((job: JobType1, idx: number) => (
          <JobItem key = {idx} job = {job} />
        )) : jobs.map((job: JobType1, idx) => (
          <JobItem key={idx} job = {job} />
        ))
        }
      </div>
    </div>
  )
}


const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs,
  loading: state.jobsReducer.loading
})

export default connect(mapStateToProps)(SearchResults);