import React from 'react';
import { Job } from '../types';
import { Button } from '@chakra-ui/core';

interface LoadMoreProps {
  jobs: Job[],
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