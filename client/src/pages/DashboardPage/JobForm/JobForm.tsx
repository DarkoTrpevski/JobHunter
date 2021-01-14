import { Box, Heading, FormControl, FormLabel, Input, Textarea, Stack, Checkbox, Flex, Button, Select } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState, JobType1 } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import useForm from '../../../hooks/useForm';
import { saveJob } from '../../../redux/jobs/jobsActions';
import Alert from '../../../layouts/Alert/Alert';



interface JobFormProps {
  jobEdit?: JobType1 | null,
  formType: string,
  inputArr: {
    labelName: string,
    name: string,
    placeholder: string,
    isRequired: boolean
  }[],
  onSubmit: (job: JobType1) => void,
  darkMode: boolean
}

const initialValues = {
  company: "",
  description: "",
  title: "",
  location: "",
  url: "",
  type: false,
  applicationStatus: "",
  note: "",
}

const JobForm: React.FC<JobFormProps> = ({ jobEdit, formType, inputArr, onSubmit, darkMode }) => {


  const [values, setValues, handleChange] = useForm(initialValues);

  useEffect(() => {
    console.log('Inside JobForm, useEffect, the editted jobEdit is: ', jobEdit);
    if(jobEdit && jobEdit !== null) {
      setValues(jobEdit);
      if(jobEdit.type === "Full Time") {
        setValues({...jobEdit, type: true})
      } else if(jobEdit.type === "Part Time") {
        setValues({...jobEdit, type: false})
      }
    }
  }, [jobEdit])


  const resetState = () => {
    setValues(initialValues)
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values)
    resetState();
  }

  return (
    <Box w="full" h = "full" className = {`Dashboard-${formType}-job`} bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <Alert />
      <form onSubmit={onFormSubmit}>
        <Heading as="h5">{formType}</Heading>
        {
          inputArr.map((input, idx) => (
            <FormControl key = {idx}>
              <FormLabel color = {`${VARIANT_COLOR}.400`}>{input.labelName}</FormLabel>
              <Input isRequired = {input.isRequired} name = {input.name} value = {values[input.name] || ""} onChange = {handleChange} focusBorderColor = {`${VARIANT_COLOR}.200`} spellCheck = "false" variant = "flushed" type = "text" placeholder = {input.placeholder} />
            </FormControl>
          ))
        }
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "description" value={values.description || ""} onChange={handleChange} spellCheck="false" focusBorderColor = {`${VARIANT_COLOR}.200`} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <Stack mt = {5}>
          <Checkbox name = "type" color = {`${VARIANT_COLOR}.400`} isChecked={values.type || ""} onChange={handleChange}>
            Full-Time
          </Checkbox>

          <Select name = "applicationStatus" value = {values.applicationStatus || ""} onChange = {handleChange} placeholder="Select Application Status" bg = {`${!darkMode ? "#fff" : "gray.800"}`} focusBorderColor="teal.200">
            <option value="notApplied">Not Applied</option>
            <option value="applied">Applied</option>
            <option value="phoneChat">Phone/Chat Screen</option>
            <option value="techTest">Technical test</option>
            <option value="interview">Interview</option>
            <option value="hired">Hiring Process</option>
          </Select>
          {/* OVA TREBA DA GO SMENAM(DA DODADAM JOB APPLICATION STATUS VO TYPES) */}
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Notes</FormLabel>
            <Textarea p = {2} name = "note" value={values.note || ""} onChange={handleChange} placeholder="Add notes about the job progress" size="md" spellCheck="false"  focusBorderColor="teal.200"/>
          </FormControl>

        </Stack>
        <Flex flexDir={["column", "row"]} justifyContent={["start", "space-between", "space-between", "space-between", "space-between"]}>
          <Button textTransform="uppercase" type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50} lineHeight={["1rem", "1.2rem"]} >
            {formType}
          </Button>
          <Button textTransform="uppercase" type = "button" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50} lineHeight={["1rem", "1.2rem"]} >
            CLEAR
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