import React from 'react';
import Results from './Results/Results';
import SearchContainer from './SearchContainer/SearchContainer';

interface JobSearchProps {}

const JobSearch: React.FC<JobSearchProps> = () => {
  return (
    <div style = {{width: '100%', height: '100%', textAlign: 'center'}}>
      <SearchContainer>
        <Results />
      </SearchContainer>
    </div>
  );
}
export default JobSearch;