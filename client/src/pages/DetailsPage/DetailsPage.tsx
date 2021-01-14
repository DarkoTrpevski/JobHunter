import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/core';
import { JobType1 } from '../../redux/types/types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showDetails } from '../../redux/jobs/jobsActions';
import { stripHtmlTags } from '../../utils/stripHtmlTags';
import parse from 'html-react-parser';
import { AppState } from '../../redux/types/types';


interface DetailsPageProps {
  darkMode: boolean,
  jobDetail: JobType1 | null,
  showDetails: (id: number | string) => void,
  match: any
}

const DetailsPage: React.FC<DetailsPageProps> = ({ darkMode, jobDetail, showDetails, match: { params: { id } } }) => {

  useEffect(() => {
    console.log('Inside JobDetails useEffect, params ID is:', id);
    showDetails(id);
  }, [id])

  if(jobDetail === null || jobDetail === undefined) return (<h1>Loading...</h1>)

  console.log('Inside JobDetails: the job is:', jobDetail);

  return (
    <Flex fontSize = {14} lineHeight = {1.4} w = "full" mx="auto" className = "JobDetails" justifyContent = "space-between">
      <Stack w = "auto" h="50%" className = "JobDetails-generalinfo" p ={5} boxShadow = "0 0 3px #999" >
        <Box w = "full" className = "company-apply">
          {/*Turn the image back to square on small devices*/}
          <Image w="auto" h="auto" src = {jobDetail.company_logo} alt = {`${jobDetail.company} logo`} borderRadius = "full" />
          <Heading mt={5} fontSize = {14} fontFamily = "HelveticaLight" as="h2" >{jobDetail.company}</Heading>
        </Box>
        <Box w = "full" className = "company-info" mt = {10}>
          <Text fontFamily = "HelveticaLight">Company Link: </Text>
          <Link fontFamily = "HelveticaLight">{jobDetail.company_url}</Link>
          <Text fontFamily = "HelveticaLight">Location: {jobDetail.location}</Text>
          <Text fontFamily = "HelveticaLight">{jobDetail.type}</Text>
        </Box>
        <Box w = "full" className = "company-apply" mt = {5}>
          <Button w = "full" p = {5} borderRadius = {10} border = {`2px solid ${darkMode ? "" : ""}`} variant = "solid">
            <Link _hover = {{textDecor: 'none'}} target = "blank" href = {jobDetail.how_to_apply && stripHtmlTags(jobDetail.how_to_apply)}>APPLY</Link>
          </Button>
        </Box>
      </Stack>
      <Stack className = "JobDetails-jobinfo" ml={5} mb={5} p ={5} boxShadow = "0 0 3px #999" >
        <Box className = "jobinfo-company">
          <Heading fontSize = {32} lineHeight = {1.5} fontFamily = "HelveticaLight" as="h2">JOB SUMMARY</Heading>
          <Heading fontSize = {22} lineHeight = {1.5} fontFamily = "HelveticaLight" as="h4">{jobDetail.title}</Heading>
          <Box>
            {jobDetail.description && parse(jobDetail.description)}
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  jobDetail: state.jobsReducer.jobDetail
})

export default connect(mapStateToProps, { showDetails })(DetailsPage);