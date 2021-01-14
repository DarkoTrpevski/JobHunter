import { Flex, Box, Stack, Link, Tag, TagIcon, TagLabel } from '@chakra-ui/core';
import moment from 'moment';
import React from 'react';
import LoadingSkeleton from '../../../components/LoadingSkeleton/LoadingSkeleton';

export interface ListItemProps<T> {
  value: T;
  onItemClick: (item: T) => void;
  saveJob?: (item: T) => void;
  darkMode: boolean;
  loading: boolean;
  isEditable?: boolean;
}

interface JobItemValues {
  id?: string | number,
  created_at?: string,
  type?: string,
  title: string,
  company: string,
  location: string,
}

const ListItem = <T extends JobItemValues>({ value, onItemClick, saveJob, darkMode, loading, isEditable }: ListItemProps<T>) => {

  let date = value && value.created_at && new Date(value.created_at);

  console.log('Inside ListItem, the value is: ', value);


  const loadingJSX = (
    <Flex width = "full" align = "center" justifyContent = "center" my = {10} boxShadow = {`0 0 5px ${!darkMode ? "#1A202C" : "#69eed3"}`} borderRadius = {10} className = "List-item" >
      <Box w = "full" height = "full" >
        <Flex w = "full" h = "full" alignItems = "center" justifyContent = "space-between" flexDir = "column" paddingY = {10} paddingX = {5} >
          <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
            <Box as = "h2" fontSize = "1.4rem" >
              <LoadingSkeleton width = {300}/>
            </Box>
            <Box>
              <span><LoadingSkeleton width = {90}/></span>
            </Box>
          </Stack>
          <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
            <Box as = "h4" fontSize = "1rem" >
              <LoadingSkeleton width = {200} />
            </Box>
            <Box>
              <span><LoadingSkeleton width = {60}/></span>
            </Box>
          </Stack>
          {
            isEditable && (
              <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
                <LoadingSkeleton width = {120} height = {30} />
              </Stack>
            )
          }
        </Flex>
      </Box>
    </Flex>
  )


  const listItemJSX = (
    <Flex userSelect="none" width = "full" align = "center" justifyContent = "center" my = {4} boxShadow = {`0 0 5px ${!darkMode ? "#1A202C" : "#69eed3"}`} borderRadius = {10} className = "List-item" >
        <Box w = "full" height = "full" >
          <Flex w = "full" h = "full" alignItems = "center" justifyContent = "space-between" flexDir = "column" paddingY = {10} paddingX = {5} >
            <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
              <Box as = "h2" fontSize = "1.4rem" >
                {value.title && value.title}
              </Box>
              <Box>
                <span>{date && (moment(date).fromNow())}</span>
              </Box>
            </Stack>
            <Stack w = "full" flexDir = "row" justifyContent = "space-between" alignItems = "center">
              <Box style={{marginBottom:'0'}}>
                {
                <>
                  <span className="info-job-company">
                    {value.company && value.company.length > 15 ? value.company.substring(0, 12) : value.company}
                  </span>
                  <span> — </span>
                  <span className = "info-job-type">
                    {value.type && value.type}
                  </span>
                </>
                }
              </Box>
              <Box>
                <span>{value.location && value.location}</span>
              </Box>
            </Stack>
            <Stack w = "full" flexDir = "row" justifyContent = "flex-start" alignItems = "center">
            {/* // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
            // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
            // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE */}
            {isEditable ? (
              <Tag onClick = {() => onItemClick(value)} cursor="pointer" >
                <TagIcon aria-label = "Save Job to Dashboard" icon = "add" />
                <TagLabel>Edit Job</TagLabel>
              </Tag>) : (                
                <Tag onClick = {() => saveJob && saveJob(value)} cursor="pointer" >
                  <TagIcon aria-label = "Save Job to Dashboard" icon = "add" />
                  <TagLabel>Save Job</TagLabel>
                </Tag>
                )}
            </Stack>
          </Flex>
        </Box>
    </Flex>
  )

  return (
    <>
      {value && !loading ? (listItemJSX) : (loadingJSX)}
    </>
  );
}

export default ListItem;