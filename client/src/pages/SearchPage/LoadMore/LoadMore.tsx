import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { JobType1 } from '../../../redux/types/types';


interface LoadMoreProps {
  jobs: JobType1[],
  loading: boolean,
  loadMoreJobs: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ jobs, loading, loadMoreJobs }) => {

  return (
    <Flex justify="center" className = "LoadMore">
      {jobs.length > 0 && (
        <Button type = "button" isDisabled = {loading} onClick = {loading ? undefined : loadMoreJobs} >Load More Jobs</Button>
      )}
    </Flex>
  )
}

export default LoadMore;