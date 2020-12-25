import { Heading } from '@chakra-ui/core';
import React from 'react'
import { JobType1 } from '../../../redux/types/types';
import SavedJobItem from '../SavedJobItem/SavedJobItem';

interface DashboardResultsProps {
  savedJobs: JobType1[]
}

const DashboardResults: React.FC<DashboardResultsProps> = ({ savedJobs }) => {
  return (
  <>
    {savedJobs !== undefined && savedJobs.length > 0
    ? savedJobs.map((savedJob: JobType1, idx: number) => (
        <SavedJobItem key={idx} savedJob = {savedJob} />
      ))
    : <Heading as = "h5">Please add a job, before you can edit.</Heading>
    }
    </>
  );
}
export default DashboardResults;