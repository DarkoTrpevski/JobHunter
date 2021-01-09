import { Box } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import SavedJobItem from '../SavedJobItem/SavedJobItem';

interface Props<T> {
  data: T[];
  onItemClick: (item: T) => void;
}


const List = <T extends object>({ data, onItemClick }: Props<T>) => {

  useEffect(() => {
    console.log('Inside List, the data is: ', data);
  }, [data])

  if(data.length === 0) return null;

  return (
    <>
      {
      data.map((item: T, idx: number) => (
        <Box key = {idx} onClick={() => onItemClick(item)}>
          <SavedJobItem savedJob = {item} />
        </Box>
      ))
      }
    </>
  );
}
export default List;