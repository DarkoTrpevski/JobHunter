import React from 'react';
import { Job } from '../types';
import { Button } from '@chakra-ui/core';

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

interface LoadMoreProps {
  jobs: JobType1[],
  loading: boolean,
  loadMoreJobs: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ jobs, loading, loadMoreJobs }) => {

  return (
    <div className = "LoadMore">
      {jobs.length > 0 && (
        <Button type = "button" isDisabled = {loading} onClick = {loading ? undefined : loadMoreJobs} >Load More Jobs</Button>
      )}
    </div>
  )
}

export default LoadMore;