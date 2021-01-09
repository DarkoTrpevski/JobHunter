import React from 'react';
import SearchResults from './SearchResults/SearchResults';
import SearchContainer from './SearchContainer/SearchContainer';
import { Box } from '@chakra-ui/core';

interface JobSearchProps {}

const Search: React.FC<JobSearchProps> = () => {
  return (
    <Box w = "full">
      <SearchContainer>
        <SearchResults />
      </SearchContainer>
    </Box>
  );
}
export default Search;