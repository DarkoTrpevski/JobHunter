import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Checkbox, Heading, Text, SimpleGrid, Select, Textarea } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../constants/constants';
import { AppState } from '../../redux/types/types';
import { useFormFields } from "./useForm/useForm2";
import { dashboardAddJobStyle, dashboardShowJobStyle } from './styles';


interface DashboardProps {
  darkMode: boolean
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {

  const initialValues = {
    jobCompany: "",
    jobDescription: "",
    jobTitle: "",
    jobDate: "",
    jobLocation: "",
    jobUrl: "",
    jobType: false,
  }

  const dummyJob = {
    jobCompany: "Facebook",
    jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium expedita exercitationem ipsa aperiam corporis nesciunt, atque asperiores laboriosam libero vero dicta explicabo illo ipsam possimus tenetur dolore voluptate omnis.",
    jobTitle: "Senior FullStack Developer",
    jobDate: "14.10.2020",
    jobLocation: "Los Angeles, CA, USA",
    jobUrl: "https://facebook.com/careers/?jobid=fs2020-1f9f932-knm28z",
    jobType: false,
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

  const [fields, handleFieldChange] = useFormFields(initialValues);
  const [editFields, handleEditFieldChange] = useFormFields(initialEditValues);

  const addCustomJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
  }
  const editCustomJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(editFields);
  }

  return (
    <Flex w = "full" className = "Dashboard" fontSize = {14} flexDir="column" >
      <SimpleGrid className = "SimpleGrid" w = "full" h = "full" columns = {{sm: 1, md: 2}} spacing = {10}>

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

        <Box h = "full" className = "Dashboard-show-jobs" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardShowJobStyle.padding} borderRadius = {20} >
          <Heading as="h5">Saved Jobs: </Heading>

          <Box className = "DUMMY-JOB-ITEM" w = "full" boxShadow = {`0 0 5px #555`} borderRadius = {10}>
            <Flex w = "full" h = "full" alignItems = "center" justifyContent = "space-between" flexDir = "column" p = {5} >
              <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
                <Heading as = "h2" fontSize = "1.4rem" >
                  {dummyJob.jobTitle}
                </Heading>
                <Text>
                {dummyJob.jobDate}
                </Text>
              </Stack>
              <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
                <Heading as = "h4" fontSize = "1rem" >
                  {dummyJob.jobCompany} — {dummyJob.jobType}
                </Heading>
                <Text>
                  {dummyJob.jobLocation}
                </Text>
              </Stack>
            </Flex>
          </Box>

        </Box>

      </SimpleGrid>


      <Box mt = {10} h = "full" className = "Dashboard-edit-job" bg = {`${darkMode ? "#17191e" : "#fff"}`} p = {dashboardAddJobStyle.padding} borderRadius = {20} >
        <form onSubmit={editCustomJob}>
          <Heading as="h5">Edit job </Heading>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
            <Input name = "editCompany" value = {editFields.editCompany} onChange = {handleEditFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. Facebook" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
            <Input name = "editTitle" value = {editFields.editTitle} onChange = {handleEditFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
            <Textarea p = {2} name = "editDescription" value={editFields.editDescription} onChange={handleEditFieldChange} placeholder="Add notes about the job progress" size="md" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
            <Input name = "editLocation" value = {editFields.editLocation} onChange = {handleEditFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
            <Input name = "editUrl" value = {editFields.editUrl} onChange = {handleEditFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" />
          </FormControl>
          <Stack mt = {5}>
            <Checkbox name = "editType" color = {`${VARIANT_COLOR}.400`} isChecked={editFields.editType} onChange={handleEditFieldChange}>
              Full-Time
            </Checkbox>
            <Select value = {editFields.editJobApplicationStatus} name = "editJobApplicationStatus" onChange = {handleEditFieldChange} placeholder="Select Application Status" bg = {`${!darkMode ? "#fff" : "gray.800"}`}>
              <option value="notApplied">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="phoneChat">Phone/Chat Screen</option>
              <option value="techTest">Technical test</option>
              <option value="interview">Interview</option>
              <option value="hired">Hiring Process</option>
            </Select>
            <FormControl>
              <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Notes</FormLabel>
              <Textarea p = {2} name = "editJobNote" value={editFields.editJobNote} onChange={handleEditFieldChange} placeholder="Add notes about the job progress" size="md" />
            </FormControl>
          </Stack>
          <Flex justifyContent={["start", "center"]}>
            <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} mt = {5} borderRadius = {50}fontSize = {["0.75rem", "1rem"]} lineHeight={["1rem", "1.2rem"]} >
              FINISH EDITING JOB
            </Button>
          </Flex>
        </form>
      </Box>

    </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps)(Dashboard);