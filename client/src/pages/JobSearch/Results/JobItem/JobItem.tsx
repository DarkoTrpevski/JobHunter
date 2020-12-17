import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, IconButton, Stack, Tag, TagIcon, TagLabel, Text } from "@chakra-ui/core";
import { connect } from "react-redux";
import { AppState } from "../../../../redux/types/types";
import { saveJob } from '../../../../redux/jobs/jobsActions';

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

interface JobItemProps {
  job: JobType1,
  jobOrigin: string,
  saveJob: (job: JobType1, origin: string) => void,
  darkMode: boolean
}

const JobItem: React.FC<JobItemProps> = ({ job, jobOrigin, saveJob, darkMode }) => {

  let date = job && +new Date(job.created_at);
  
  return (
    // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
    // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
    // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
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
              <IconButton onClick = {() => saveJob(job, jobOrigin)} variant = "ghost" aria-label = "Save Job to Dashboard" icon = "add" size = "lg" />
              {/* <Tag>
                <TagIcon aria-label = "Save Job to Dashboard" icon = "add" />
                <TagLabel>Save Job</TagLabel>
              </Tag> */}
            </Stack>
          </Flex>
        </Link>
      </Box>
  </Flex>
  // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
  // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
  // ELEMENTOT NA HOVER DA DOBIE BORDER I MOZHEBI I RAZLICEN BACKGROUND
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  jobOrigin: state.jobsReducer.jobOrigin
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
const connector = connect(mapStateToProps, { saveJob });
export default connector(JobItem);