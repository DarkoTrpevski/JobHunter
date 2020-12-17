import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/types/types';
import JobItem from './JobItem/JobItem';

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


interface ResultsProps {
  jobs: JobType1[]
}


const Results: React.FC<ResultsProps> = ({ jobs }) => {
  return (
    <div className="Results" style = {{width: '100%', marginTop: '4rem'}}>
      <div className="md-container">
        {jobs.map((job: JobType1, idx) => (
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
          <JobItem key={idx} job = {job} />
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
          // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
        ))}
      </div>
    </div>
  )
}


const mapStateToProps = (state: AppState) => ({
  jobs: state.jobsReducer.jobs
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
const connector = connect(mapStateToProps);
export default connector(Results);