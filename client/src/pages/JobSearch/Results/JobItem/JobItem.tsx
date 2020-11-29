import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Job } from "../../types";
import { Box, Flex, Heading, Stack, Tag, TagIcon, TagLabel, Text } from "@chakra-ui/core";
import { Center } from "@chakra-ui/react";
import { connect } from "react-redux";

interface JobItemProps {
  job: Job,
  darkMode: boolean
}

const JobItem: React.FC<JobItemProps> = ({ job, darkMode }) => {

  let date = job && +new Date(job.created_at);
  
  return (
    <Flex className = "JobItem" width = "full" align = "center" justifyContent = "center" my = {10} boxShadow = {`0 0 5px ${!darkMode ? "#1A202C" : "#69eed3"}`} borderRadius = {10}>
      <Box w = "full" height = "full" >
        <Link to = { job && `/jobdetail/${job.id}` }>
          <Center w = "full" h = "full" flexDir = "column" paddingY = {10} paddingX = {5} >
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
              {/* <IconButton variant = "ghost" aria-label = "Save Job to Dashboard" icon = "add" size = "lg" /> */}
              <Tag>
                <TagIcon aria-label = "Save Job to Dashboard" icon = "add" />
                <TagLabel>Save Job</TagLabel>
              </Tag>
            </Stack>
          </Center>
        </Link>
      </Box>
  </Flex>
  );
}

const mapStateToProps = (state: any) => ({
  darkMode: state.uiReducer.darkMode
})

//Using this connector allows to circumvent the type errors resulting in Results.tsx, by using the classic connect() function
const connector = connect(mapStateToProps);
export default connector(JobItem);