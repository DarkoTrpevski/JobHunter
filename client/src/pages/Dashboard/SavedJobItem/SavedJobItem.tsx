import { Box, Flex, Heading, Stack, Text, Link } from '@chakra-ui/core';
import moment from "moment";
import React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../../../redux/types/types';
import { editJob } from '../../../redux/jobs/jobsActions';

interface JobType1 {
  id?: string;
  jobOrigin?: string;
  created_at?: string;
  description?: string;
  how_to_apply?: string;
  company_url?: string;
  company_logo?: string;
  type?: string;
  url?: string;
  company: string;
  location: string;
  title: string;
}

interface SavedJobItemProps {
  darkMode: boolean,
  editJob: (job: JobType1) => void,
  savedJob: JobType1
}

const SavedJobItem: React.FC<SavedJobItemProps> = ({ darkMode, savedJob, editJob }) => {

  let date;
  if(savedJob && savedJob.created_at) {
    date = savedJob && +new Date(savedJob.created_at);
  }

  const onEditJob = (): void => {
    editJob(savedJob);
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

export default connect(mapStateToProps, { editJob })(SavedJobItem);