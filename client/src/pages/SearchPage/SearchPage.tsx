import React from 'react';
import SearchResults from './SearchResults/SearchResults';
import SearchContainer from './SearchContainer/SearchContainer';
import { Box } from '@chakra-ui/core';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  console.log('SearchPage.tsx');

  return (
    <Box w = "full">
      <SearchContainer>
        <SearchResults />
      </SearchContainer>
    </Box>
  );
}
export default SearchPage;