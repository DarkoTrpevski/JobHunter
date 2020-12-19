import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { AppState } from '../../redux/types/types';
import { dashboardShowJobStyle } from './styles';
import { getSavedJobs } from '../../redux/jobs/jobsActions';
import SavedJobItem from './SavedJobItem/SavedJobItem';
import EditJobForm from './EditJobForm/EditJobForm';
import AddJobForm from './AddJobForm/AddJobForm';


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

interface DashboardProps {
  darkMode: boolean,
  getSavedJobs: () => void,
  savedJobs: JobType1[]
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode, getSavedJobs, savedJobs }) => {

  useEffect(() => {
    getSavedJobs();
  }, [getSavedJobs])

  return (
    <Flex w = "full" className = "Dashboard" fontSize = {14} flexDir="column" >
      <SimpleGrid className = "SimpleGrid" w = "full" h = "full" columns = {{sm: 1, md: 2}} spacing = {10}>
        <AddJobForm />
        <Box h = "full" className = "Dashboard-show-jobs" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardShowJobStyle.padding} borderRadius = {20} >
          <Heading as="h3">Saved Jobs: </Heading>
          {savedJobs.length > 0
          ? savedJobs.map((savedJob: JobType1, idx) => (
              <SavedJobItem key={idx} savedJob = {savedJob} />
            ))
          : <Heading as = "h5">Please add a job, before you can edit.</Heading>
          }
        </Box>
      </SimpleGrid>
      <EditJobForm />
    </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  savedJobs: state.jobsReducer.savedJobs,
})

export default connect(mapStateToProps, { getSavedJobs })(Dashboard);