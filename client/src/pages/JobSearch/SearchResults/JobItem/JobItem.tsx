import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Stack, Tag, TagIcon, TagLabel, Text } from "@chakra-ui/core";
import { connect } from "react-redux";
import { AppState, JobType1 } from "../../../../redux/types/types";
import { saveJob } from '../../../../redux/jobs/jobsActions';

interface JobItemProps {
  job: JobType1,
  jobOrigin: string,
  saveJob: (job: JobType1, origin: string) => void,
  darkMode: boolean
}

const JobItem: React.FC<JobItemProps> = ({ job, jobOrigin, saveJob, darkMode }) => {

  let date = job && job.created_at && +new Date(job.created_at);
  
  return (
    <Flex className = "JobItem" width = "full" align = "center" justifyContent = "center" my = {10} boxShadow = {`0 0 5px ${!darkMode ? "#1A202C" : "#69eed3"}`} borderRadius = {10}>
      <Box w = "full" height = "full" >
        <Link to = { job && `/jobdetail/${job.id}` }>
          <Flex w = "full" h = "full" alignItems = "center" justifyContent = "space-between" flexDir = "column" paddingY = {10} paddingX = {5} >
            <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
              <Heading as = "h2" fontSize = "1.4rem" >
                {job && job.title}
              </Heading>
              <Text>
                <span>{date && (moment(date).startOf("hour").fromNow())}</span>
              </Text>
            </Stack>
            <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
              <Heading as = "h4" fontSize = "1rem" >
                {job.company}<span> — </span><span className = "info-job-type"> {job.type}</span>
              </Heading>
              <Text>
                <span>{job && job.location}</span>
              </Text>
            </Stack>
            <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
              <Tag onClick = {() => saveJob(job, jobOrigin)}>
                <TagIcon aria-label = "Save Job to Dashboard" icon = "add" />
                <TagLabel>Save Job</TagLabel>
              </Tag>
            </Stack>
          </Flex>
        </Link>
      </Box>
  </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  jobOrigin: state.jobsReducer.jobOrigin
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
export default connect(mapStateToProps, { saveJob })(JobItem);