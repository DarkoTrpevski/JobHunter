import { Box, Heading, FormControl, FormLabel, Input, Textarea, Stack, Checkbox, Flex, Button } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState, JobType1 } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import useForm from '../../../hooks/useForm';
import { saveJob } from '../../../redux/jobs/jobsActions';


interface AddJobFormProps {
  darkMode: boolean,
  saveJob: (job: JobType1, jobOrigin?: string) => void
}

const initialValues = {
  jobCompany: "",
  jobDescription: "",
  jobTitle: "",
  jobLocation: "",
  jobUrl: "",
  jobType: false,
}

const AddJob: React.FC<AddJobFormProps> = ({ saveJob, darkMode }) => {

  const [values, setValues, handleChange] = useForm(initialValues);

  const resetState = () => {
    const resetedState = {
      jobCompany: "",
      jobTitle: "",
      jobDescription: "",
      jobLocation: "",
      jobType: false,
      jobUrl: "",
    }
    setValues(resetedState)
  }

	const addCustomJob = (e: React.FormEvent) => {
		e.preventDefault();
    console.log(values);
    try {
      const date = new Date().toString();
      console.log('Inside Add Job, date is: ', date);
      const job: JobType1 = {
        company: values.jobCompany,
        created_at: date,
        title: values.jobTitle,
        description: values.jobDescription,
        location: values.jobLocation,
        type: values.jobType === true ? "Full Time" : "Part Time",
        url: values.jobUrl,
      }
      console.log('Inside Add Job, job is: ', job);

      saveJob(job)
      resetState();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <form onSubmit={addCustomJob}>
        <Heading as="h5">Add Custom Job </Heading>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
          <Input isRequired name = "jobCompany" value = {values.jobCompany || ""} onChange = {handleChange} focusBorderColor = {`${VARIANT_COLOR}.200`} spellCheck = "false" variant = "flushed" type = "text" placeholder = "eg. Facebook" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input isRequired name = "jobTitle" value = {values.jobTitle || ""} onChange = {handleChange} focusBorderColor = {`${VARIANT_COLOR}.200`} spellCheck = "false" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "jobDescription" value={values.jobDescription || ""} onChange={handleChange} spellCheck focusBorderColor = {`${VARIANT_COLOR}.200`} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input isRequired name = "jobLocation" value = {values.jobLocation || ""} onChange = {handleChange} focusBorderColor={`${VARIANT_COLOR}.400`} variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
          <Input isRequired name = "jobUrl" value = {values.jobUrl || ""} onChange = {handleChange} focusBorderColor={`${VARIANT_COLOR}.400`} spellCheck = "false" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" />
        </FormControl>
        <Stack mt = {5}>
          <Checkbox name = "jobType" color = {`${VARIANT_COLOR}.400`} isChecked={values.jobType || ""} onChange={handleChange}>
            Full-Time
          </Checkbox>
        </Stack>
        <Flex justifyContent={["start", "center"]}>
          <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50}fontSize = {["0.75rem", "1rem"]} lineHeight={["1rem", "1.2rem"]} >
            ADD CUSTOM JOB
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps, { saveJob })(AddJob);