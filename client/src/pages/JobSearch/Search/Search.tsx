import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { AppState } from '../../../redux/types/types';

interface SearchState {
  desc: string,
  loc: string,
  full: boolean,
  pageNum: number,
}

interface SearchProps {
  values: SearchState,
  jobOrigin: string,
  changeSetValues: (e: React.ChangeEvent<HTMLInputElement>) => void,
  changeJobOrigin: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  handleSubmit: (e: React.FormEvent) => void,
  handleClear: () => void,
  darkMode: boolean
}

const Search: React.FC<SearchProps> = ({ values, changeSetValues, jobOrigin, changeJobOrigin, handleSubmit, handleClear, darkMode }) => {

  const { desc, loc, full } = values;

  const isQueryPresent = () => {
    return desc || loc || full || jobOrigin;
  };

  return (
    <Box w = "full" m = "0 auto" textAlign = "left" my = {8}>
      <form onSubmit = {handleSubmit}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input name = "desc" value = {desc} onChange = {changeSetValues} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input name = "loc" value = {loc} onChange = {changeSetValues} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <Stack mt = {5} flexDir = "row" justifyContent = "space-between">
          <Checkbox name = "full" color = {`${VARIANT_COLOR}.400`} isChecked={full} onChange={changeSetValues}>
            Full-Time
          </Checkbox>
          <Box w= "auto">
            <Select name = "jobOrigin" value = {jobOrigin} onChange = {changeJobOrigin} placeholder="Select Website" bg = {`${!darkMode ? "#fff" : "gray.800"}`}>
              <option value="github">GitHub</option>
            </Select>
          </Box>
        </Stack>
        <Flex justifyContent = "space-between">
          <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} width = "20%" mt = {5} borderRadius = {50} py = {6} px={20} >SEARCH</Button>
          <Button onClick = {handleClear} isDisabled = {!isQueryPresent()} type = "button" variant = "outline" variantColor = {VARIANT_COLOR} width = "20%" mt = {5} borderRadius = {50} py = {6} px={20} >CLEAR</Button>
        </Flex>
      </form>
    </Box>
  );
}

const mapStateToProps = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode,
  jobOrigin: state.jobsReducer.jobOrigin
})

export default connect(mapStateToProps)(Search);