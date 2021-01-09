import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { AppState, JobType1 } from '../../redux/types/types';
import { dashboardShowJobStyle } from './styles';
import { getSavedJobs, saveJob, showEditJob } from '../../redux/jobs/jobsActions';
import EditJob from './EditJob/EditJob';
import AddJob from './AddJob/AddJob';
import DashboardResults from './DashboardResults/DashboardResults';
// import List from './List2/List';
import JobForm from './JobForm/JobForm';
import { inputArray } from './JobForm/inputArray';
import SavedJobItem from './SavedJobItem/SavedJobItem';
import List from './List3/List';
import ListItem from './List3/ListItem';
import Accordion from '../../components/UI/Accordion/Accordion';


interface DashboardProps {
  saveJob: (job: JobType1) => void,
  showEditJob: (job: JobType1) => void,
  darkMode: boolean,
  loading: boolean,
  jobOrigin: string,
  getSavedJobs: () => void,
  savedJobs: JobType1[]
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode, loading, jobOrigin, saveJob, showEditJob, getSavedJobs, savedJobs }) => {

  useEffect(() => {
    getSavedJobs();
  }, [getSavedJobs])

  // const addJob = (values: any) => {
  //   console.log(values);
  //   try {
  //     const job: JobType1 = {
  //       company: values.jobCompany,
  //       title: values.jobTitle,
  //       description: values.jobDescription,
  //       location: values.jobLocation,
  //       type: values.jobType === true ? "Full Time" : "Part Time",
  //       url: values.jobUrl,
  //     }
  //     console.log(job);
  //     // saveJob(job)
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
  const onEditJob = (item: any) => {
    console.log('Inside Dashboard onEditJob func: the item clicked is: ', item);
    showEditJob(item);
  }

  const onSaveJob = (item: any) => {
    console.log('Inside Dashboard onSaveJob func: the item clicked is: ', item);
  }

  return (
    <Flex w = "full" className = "Dashboard" fontSize = {14} flexDir="column" >

      <SimpleGrid className = "SimpleGrid" w = "full" h = "full" columns = {{sm: 1, md: 2}} spacing = {10}>
        {/* <JobForm formType = "Add Job" inputArr = {inputArray} onSubmit = {addJob} /> */}
        <AddJob />
        <Box h = "full" className = "Dashboard-show-jobs" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardShowJobStyle.padding} borderRadius = {20} >
          <Heading as="h3">Saved Jobs: </Heading>
          <List items = {savedJobs} itemComponent = {ListItem} onItemClick={(item: any) => onEditJob(item)} saveJob={onSaveJob} darkMode = {darkMode} loading= {loading} />
        </Box>
      </SimpleGrid>
      

      <Accordion darkMode = {darkMode}>
        <EditJob />
      </Accordion>

    </Flex>

  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  loading: state.jobsReducer.loading,
  jobOrigin: state.jobsReducer.jobOrigin,
  savedJobs: state.jobsReducer.savedJobs,
})

export default connect(mapStateToProps, { saveJob, showEditJob, getSavedJobs })(Dashboard);