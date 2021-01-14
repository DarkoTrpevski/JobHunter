import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { AppState, JobType1 } from '../../redux/types/types';
import { dashboardShowJobStyle } from './styles';
import { editJob, getSavedJobs, saveJob, showEditJob } from '../../redux/jobs/jobsActions';
import JobForm from './JobForm/JobForm';
import { inputArray } from './JobForm/inputArray';
import List from './List3/List';
import ListItem from './List3/ListItem';
import Accordion from '../../components/UI/Accordion/Accordion';
import Alert from '../../layouts/Alert/Alert';


interface DashboardPageProps {
  jobEdit: JobType1 | null,
  editJob: (job: JobType1) => void,
  saveJob: (job: JobType1) => void,
  showEditJob: (job: JobType1) => void,
  getSavedJobs: () => void,
  savedJobs: JobType1[],
  darkMode: boolean,
  loading: boolean,
}

const DashboardPage: React.FC<DashboardPageProps> = ({ jobEdit, editJob, saveJob, showEditJob, getSavedJobs, savedJobs, darkMode, loading }) => {

  useEffect(() => {
    setTimeout(() => {
      getSavedJobs();
    }, 500)
  }, [getSavedJobs])


  const onAddJob = (values: any) => {
    try {
      const date = new Date().toString();
      console.log('Inside Add Job, date is: ', date);
      const job: JobType1 = {
        company: values.company,
        location: values.location,
        title: values.title,
        url: values.url,
        description: values.description,
        type: values.type === true ? "Full Time" : "Part Time",
        created_at: date,
        applicationStatus: values.applicationStatus,
        note: values.note,
      }
      console.log('Inside DashboardPage.tsx onAddJob, job is: ', job);
      saveJob(job);
    } catch (err) {
      console.log(err.message);
    }
  }

  const onEditJob = (values: any) => {
    try {
      const job: JobType1 = {
        generatedId: values.generatedId,
        company: values.company,
        location: values.location,
        title: values.title,
        url: values.url,
        description: values.description,
        type: values.type === true ? "Full Time" : "Part Time",
        created_at: jobEdit?.created_at,
        applicationStatus: values.applicationStatus,
        note: values.note,
      }
      console.log('Inside DashboardPage.tsx, onEditJob, the editted job is: ', job);
      editJob(job);
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <Flex w = "full" className = "Dashboard" fontSize = {14} flexDir="column" >

      <SimpleGrid className = "SimpleGrid" w = "full" h = "full" columns = {{sm: 1, md: 2}} spacing = {10}>
        <JobForm formType = "Add Job" inputArr = {inputArray} onSubmit = {onAddJob} />
        <Box h = "full" className = "Dashboard-show-jobs" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardShowJobStyle.padding} borderRadius = {20} >
          <Heading as="h3"> {savedJobs.length > 0 ? "Saved Jobs:": "Add or save a job"}</Heading>
          <List isEditable={true} items = {savedJobs} itemComponent = {ListItem} onItemClick={(item: any) => showEditJob(item)} darkMode = {darkMode} loading= {loading} />
        </Box>
      </SimpleGrid>      

      <Accordion d="flex" title="Click on a job to edit!" flexDir="row" alignItems="center" justify="space-between" darkMode = {darkMode}>
        <JobForm jobEdit={jobEdit} formType = "Edit Job" inputArr = {inputArray} onSubmit = {onEditJob} />
      </Accordion>

    </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  loading: state.jobsReducer.loading,
  jobEdit: state.jobsReducer.jobEdit,
  savedJobs: state.jobsReducer.savedJobs,
})

export default connect(mapStateToProps, { editJob, saveJob, showEditJob, getSavedJobs })(DashboardPage);