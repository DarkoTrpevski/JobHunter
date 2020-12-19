import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState } from '../../../redux/types/types';
import { dashboardAddJobStyle } from '../styles';
import { useFormFields } from '../useForm/useForm2';

interface JobType1 {
  id?: string;
  jobOrigin?: string;
  jobApplicationStatus?: string;
  jobNote?: string;
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

interface EditJobFormProps {
  darkMode: boolean,
  jobEdit: JobType1 | null,
}

const initialEditValues = {
  editCompany: "",
  editDescription: "",
  editTitle: "",
  editDate: "",
  editLocation: "",
  editUrl: "",
  editType: false,
  editJobApplicationStatus: "",
  editJobNote: "",
}

const EditJobForm: React.FC<EditJobFormProps> = ({ darkMode, jobEdit }) => {

  const [editFields, setEditFields, handleEditFieldChange] = useFormFields(initialEditValues);

  const editCustomJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(editFields);
  }

  if(jobEdit === null) {
    return (<h1>Loading</h1>)
  }

  return (
    <Box mt = {10} h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
      <form onSubmit={editCustomJob}>
        <Heading as="h5">Edit job </Heading>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
          <Input name = "editCompany" value = {jobEdit?.company} onChange = {handleEditFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. Facebook" spellCheck="false" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input name = "editTitle" value = {jobEdit?.title} onChange = {handleEditFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" spellCheck="false" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
          <Textarea p = {2} name = "editDescription" value={jobEdit?.description} onChange={handleEditFieldChange} placeholder="Add notes about the job progress" size="md" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input name = "editLocation" value = {jobEdit?.location} onChange = {handleEditFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
          <Input name = "editUrl" value = {jobEdit?.url} onChange = {handleEditFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" spellCheck="false" />
        </FormControl>
        <Stack mt = {5}>
          <Checkbox name = "editType" color = {`${VARIANT_COLOR}.400`} isChecked={jobEdit?.type === "Full Time"} onChange={handleEditFieldChange}>
            Full-Time
          </Checkbox>
          {/* OVA TREBA DA GO SMENAM(DA DODADAM JOB APPLICATION STATUS VO TYPES) */}
          <Select value = {editFields.editJobApplicationStatus} name = "editJobApplicationStatus" onChange = {handleEditFieldChange} placeholder="Select Application Status" bg = {`${!darkMode ? "#fff" : "gray.800"}`}>
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
            <Textarea p = {2} name = "editJobNote" value={editFields.editJobNote} onChange={handleEditFieldChange} placeholder="Add notes about the job progress" size="md" spellCheck="false" />
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

export default connect(mapStateToProps)(EditJobForm);