import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core';
import moment from "moment";
import React from 'react'
import { connect } from 'react-redux';
import { AppState, JobType1 } from '../../../redux/types/types';
import { showEditJob } from '../../../redux/jobs/jobsActions';

interface SavedJobItemProps {
  darkMode: boolean,
  showEditJob: (job: JobType1) => void,
  savedJob: any
}

const SavedJobItem: React.FC<SavedJobItemProps> = ({ savedJob, darkMode, showEditJob }) => {

  let date;
  if(savedJob && savedJob.created_at) {
    date = savedJob && +new Date(savedJob.created_at);
  }

  const onEditJob = (): void => {
    console.log('Inside SavedJobItem the saved job is: ', savedJob);
    showEditJob(savedJob);
  }

  return (
    <Box onClick = {onEditJob} className = "SavedJobItem" w = "full" boxShadow = {`0 0 5px ${!darkMode ? "#1A202C" : "#69eed3"}`} borderRadius = {10} my = {5} cursor = "pointer">
      <Flex w = "full" h = "full" alignItems = "center" justifyContent = "space-between" flexDir = "column" p = {5} >
        <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
          <Heading as = "h2" fontSize = "1.4rem" >
            {savedJob.title}
          </Heading>
          <Text>
            <span>{date && (moment(date).startOf("hour").fromNow())}</span>
          </Text>
        </Stack>
        <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
          <Heading as = "h4" fontSize = "1rem" >
            {savedJob.company} — {savedJob.type}
          </Heading>
          <Text>
            {savedJob.location}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps, { showEditJob })(SavedJobItem);