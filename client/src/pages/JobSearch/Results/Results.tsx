import React from 'react';
import { connect } from 'react-redux';
import { Job } from '../types';
import JobItem from './JobItem/JobItem';

interface ResultsProps {
  jobs: Job[]
}

interface RootState {
  jobs: Job[]
}

const Results: React.FC<ResultsProps> = ({ jobs }) => {
  return (
    <div className="Results" style = {{width: '100%', marginTop: '4rem'}}>
      <div className="md-container">
        {jobs.map((job: Job, idx) => (
          <JobItem key={idx} job = {job} />
        ))}
      </div>
    </div>
  )
}


const mapStateToProps = (state: any) => ({
  jobs: state.jobsReducer.jobs
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
const connector = connect(mapStateToProps);
export default connector(Results);