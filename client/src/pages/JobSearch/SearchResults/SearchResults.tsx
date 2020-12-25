import React from 'react';
import { connect } from 'react-redux';
import { AppState, JobType1 } from '../../../redux/types/types';
import JobItem from './JobItem/JobItem';

interface ResultsProps {
  jobs: JobType1[]
}

const SearchResults: React.FC<ResultsProps> = ({ jobs }) => {
  return (
    <div className="Results" style = {{width: '100%', marginTop: '4rem'}}>
      <div className="md-container">
        {jobs !== null && jobs.length > 0 && jobs.map((job: JobType1, idx) => (
          <JobItem key={idx} job = {job} />
        ))}
      </div>
    </div>
  )
}


const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
export default connect(mapStateToProps)(SearchResults);