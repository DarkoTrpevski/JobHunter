import React, { useEffect } from 'react';
import { connect } from 'react-redux';

interface JobDetailsProps {}

const JobDetails: React.FC<JobDetailsProps> = () => {
// const JobDetails: React.FC<JobDetailsProps> = ({ jobDetail }) => {

  useEffect(() => {})

  return (
    <div className="job-details-wrapper">
      {/* <h2>{jobDetail.title}</h2> */}
      <h1>Senior FrontEnd Dev TEST</h1>  
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  jobDetail: state.jobsReducer.jobDetail
})

export default connect(mapStateToProps)(JobDetails);