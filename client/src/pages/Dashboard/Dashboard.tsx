import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Checkbox, Select } from '@chakra-ui/core';
import React, { useState } from 'react'
import { VARIANT_COLOR } from '../../constants/constants';
import { useFormFields } from "./useForm/useForm2";


interface JobType1 {
  company: string;
  description?: string;
  title: string;
  location: string;
  url: string;//URL of Job Posting
  type: boolean;//Full-Time or Not
  // created_at: string;
}

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {

  const initialValues = {
    company: "",
    description: "",
    title: "",
    location: "",
    url: "",
    type: false,
  }

  const [fields, handleFieldChange] = useFormFields(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <Flex w = "full" h="full" minH="100vh" className = "Dashboard">
      <Box w = "full" m = "0 auto" textAlign = "left" my = {8}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Company</FormLabel>
            <Input name = "company" value = {fields.company} onChange = {handleFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. Facebook" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
            <Input name = "title" value = {fields.title} onChange = {handleFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
          </FormControl>
          <FormControl>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Description(optional)</FormLabel>
            <Input name = "description" value = {fields.description} onChange = {handleFieldChange} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "Job Description" />
          </FormControl>
          <FormControl mt = {4}>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
            <Input name = "location" value = {fields.location} onChange = {handleFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
          </FormControl>
          <FormControl mt = {4}>
            <FormLabel color = {`${VARIANT_COLOR}.400`}>Job URL</FormLabel>
            <Input name = "url" value = {fields.url} onChange = {handleFieldChange} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. https://facebook.com/careers/front-end-position?id=512497" />
          </FormControl>
          <Stack mt = {5} flexDir = "row" justifyContent = "space-between">
            <Checkbox name = "type" color = {`${VARIANT_COLOR}.400`} isChecked={fields.type} onChange={handleFieldChange}>
              Full-Time
            </Checkbox>
            <Box w= "auto">
            </Box>
          </Stack>
          <Flex justifyContent = "space-between">
            <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} width = "20%" mt = {5} borderRadius = {50} py = {6} px={20} >SEARCH</Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
export default Dashboard;