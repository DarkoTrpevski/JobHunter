import { Box, Heading, FormControl, FormLabel, Input, Textarea, Stack, Checkbox, Flex, Button } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import { useFormFields } from '../useForm/useForm2';

interface AddJobFormProps {
  darkMode: boolean
}

const initialValues = {
  jobCompany: "",
  jobDescription: "",
  jobTitle: "",
  jobDate: "",
  jobLocation: "",
  jobUrl: "",
  jobType: false,
}

const AddJobForm: React.FC<AddJobFormProps> = ({ darkMode }) => {

  const [fields, handleFieldChange] = useFormFields(initialValues);

  const addCustomJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <Box h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <form onSubmit={addCustomJob}>
        <Heading as="h5">Add Custom Job </Heading>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
          <Input name = "jobCompany" value = {fields.jobCompany} onChange = {handleFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. Facebook" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input name = "jobTitle" value = {fields.jobTitle} onChange = {handleFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "jobDescription" value={fields.jobDescription} onChange={handleFieldChange} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input name = "jobLocation" value = {fields.jobLocation} onChange = {handleFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
          <Input name = "jobUrl" value = {fields.jobUrl} onChange = {handleFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" />
        </FormControl>
        <Stack mt = {5}>
          <Checkbox name = "jobType" color = {`${VARIANT_COLOR}.400`} isChecked={fields.jobType} onChange={handleFieldChange}>
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
  darkMode: state.uiReducer.darkMode,
})

export default connect(mapStateToProps)(AddJobForm);