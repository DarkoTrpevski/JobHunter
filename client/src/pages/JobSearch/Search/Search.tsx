import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { VARIANT_COLOR } from '../../../constants/constants';
import { SearchState } from '../SearchContainer/SearchContainer';

interface SearchProps {
  values: SearchState,
  changeSetValues: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: React.FormEvent) => void,
  handleClear: () => void,
  darkMode: boolean
}

const Search: React.FC<SearchProps> = ({ values, changeSetValues, handleSubmit, handleClear, darkMode }) => {

  const isQueryPresent = () => {
    return values.desc || values.loc || values.full;
  };

  return (
    <Box w = "80%" m = "0 auto" textAlign = "left" my = {8}>
      <form onSubmit = {handleSubmit}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Job Title</FormLabel>
          <Input name = "desc" value = {values.desc} onChange = {changeSetValues} focusBorderColor = "teal.200" variant = "flushed" type = "text" placeholder = "eg. React Developer" />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Location</FormLabel>
          <Input name = "loc" value = {values.loc} onChange = {changeSetValues} focusBorderColor="teal.200" variant = "flushed" type = "text" placeholder = "eg. London" />
        </FormControl>
        <Stack mt = {5} flexDir = "row" justifyContent = "space-between">
          <Checkbox color = {`${VARIANT_COLOR}.400`} name = "full" isChecked={values.full} onChange={changeSetValues}>
            Full-Time
          </Checkbox>
          <Box w= "auto">
            <Select placeholder="Select Website" bg = {`${!darkMode ? "#fff" : "gray.800"}`}>
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

const mapStateToProps = (state: any) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps)(Search);