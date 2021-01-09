import { Box, Heading, FormControl, FormLabel, Input, Textarea, Stack, Checkbox, Flex, Button } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState, JobType1 } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import useForm from '../../../hooks/useForm';
import { saveJob } from '../../../redux/jobs/jobsActions';



interface JobFormProps {
  formType: string,
  inputArr: {
    labelName: string,
    name: string,
    placeholder: string,
    isRequired: boolean
  }[],
  onSubmit: (job: JobType1) => void,
  darkMode: boolean,
  // saveJob: (job: JobType1, jobOrigin?: string) => void
}

const initialValues = {
  jobCompany: "",
  jobDescription: "",
  jobTitle: "",
  jobLocation: "",
  jobUrl: "",
  jobType: false,
}

const JobForm: React.FC<JobFormProps> = ({ formType, inputArr, onSubmit, darkMode }) => {

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

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values)
  }

  return (
    <Box h = "full" className = {`Dashboard-${formType}-job`} bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <form onSubmit={onFormSubmit}>
        <Heading as="h5">{formType}</Heading>
        {
          inputArr.map(input => (
            <FormControl>
              <FormLabel color = {`${VARIANT_COLOR}.400`}>{input.labelName}</FormLabel>
              <Input isRequired = {input.isRequired} name = {input.name} value = {values[input.name] || ""} onChange = {handleChange} focusBorderColor = {`${VARIANT_COLOR}.200`} spellCheck = "false" variant = "flushed" type = "text" placeholder = {input.placeholder} />
            </FormControl>
          ))
        }
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "jobDescription" value={values.jobDescription || ""} onChange={handleChange} spellCheck="false" focusBorderColor = {`${VARIANT_COLOR}.200`} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <Stack mt = {5}>
          <Checkbox name = "jobType" color = {`${VARIANT_COLOR}.400`} isChecked={values.jobType || ""} onChange={handleChange}>
            Full-Time
          </Checkbox>
        </Stack>
        <Flex justifyContent={["start", "center"]}>
          <Button textTransform="uppercase" type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50}fontSize = {["0.75rem", "1rem"]} lineHeight={["1rem", "1.2rem"]} >
            {formType}
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps)(JobForm);