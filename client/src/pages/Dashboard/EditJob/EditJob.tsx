import React, { useEffect, FormEvent } from 'react';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState, JobType1 } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import { editJob } from '../../../redux/jobs/jobsActions';
import useForm from '../../../hooks/useForm';



interface EditJobFormProps {
  darkMode: boolean,
  editJob: (job: JobType1) => void,
  jobEdit: JobType1 | null,
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

const EditJob: React.FC<EditJobFormProps> = ({ darkMode, editJob, jobEdit }) => {

  const [values, setValues, handleChange] = useForm(initialValues);

  useEffect(() => {
    console.log('Inside EditJobForm, useEffect, the editted jobEdit is: ', jobEdit);
    if(jobEdit !== null) {
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


  const editCustomJob = (e: FormEvent) => {
		e.preventDefault();
    try {
      const job: JobType1 = {
        generatedId: jobEdit?.generatedId,
        company: values.company,
        title: values.title,
        description: values.description,
        location: values.location,
        type: values.type === true ? "Full Time" : "Part Time",
        applicationStatus: values.applicationStatus,
        note: values.note,
        url: values.jobUrl,
      }
      console.log('Inside EditJobForm, editCustomJob, the editted job is: ', job);
      editJob(job)
      resetState();
    } catch (err) {
      console.log(err.message);
    }
  };

  if(jobEdit === null) {
    return (
      <Box mt = {10} h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
        <Heading as="h2">Click on a job to edit!</Heading>
      </Box>
    )
  }
  

  return (
    <Box mt = {10} w = "full" h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <form onSubmit={editCustomJob}>
        <Heading as="h5">Edit job </Heading>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
          <Input name = "company" value = {values.company || ""} onChange = {handleChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. Facebook" spellCheck="false" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input name = "title" value = {values.title || ""} onChange = {handleChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" spellCheck="false" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "description" value={values.description || ""} onChange={handleChange} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input name = "location" value = {values.location || ""} onChange = {handleChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
          <Input name = "url" value = {values.url || ""} onChange = {handleChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" spellCheck="false" />
        </FormControl>
        <Stack mt = {5}>
          {/* <Checkbox name = "type" color = {`${VARIANT_COLOR}.400`} isChecked={values.type === "Full Time"} onChange={handleChange}> */}
            {/* OVA TREBA DA GO SMENAM DA MOZHE DA SE KLIKA NA EDIT */}
            {/* OVA TREBA DA GO SMENAM DA MOZHE DA SE KLIKA NA EDIT */}
            {/* OVA TREBA DA GO SMENAM DA MOZHE DA SE KLIKA NA EDIT */}
          <Checkbox name = "type" color = {`${VARIANT_COLOR}.400`} isChecked={values.type || ""} onChange={handleChange}>
            Full-Time
          </Checkbox>
          {/* OVA TREBA DA GO SMENAM(DA DODADAM JOB APPLICATION STATUS VO TYPES) */}
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
        <Flex justifyContent={["start", "center"]}>
          <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50}fontSize = {["0.75rem", "1rem"]} lineHeight={["1rem", "1.2rem"]} >
            FINISH EDITING JOB
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  jobEdit: state.jobsReducer.jobEdit,
})

export default connect(mapStateToProps, { editJob })(EditJob);