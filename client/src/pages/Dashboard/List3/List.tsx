import React from 'react';
import { ListItemProps } from './ListItem';

export type ListComponent<T = {}> = React.FC<ListItemProps<T>>;


export interface SelectProps<T>{
  items: T[];
  itemComponent: ListComponent<T>;
  onItemClick: (item: T) => void;
  saveJob: (item: T) => void;
  darkMode: boolean;
  loading: boolean;
  isAddJobItem?: boolean;
}

const List = <T extends object>(props: SelectProps<T>) => {
  
  const { items, itemComponent: ItemComponent, onItemClick, saveJob, darkMode, loading, isAddJobItem } = props;

  return (
    <>
      {items.map((item: T, idx: number)=> {
        return (
          <ItemComponent key={idx} value={item} onItemClick={onItemClick} saveJob={saveJob} darkMode = {darkMode} loading= {loading} isAddJobItem = {isAddJobItem} />
        );
      })}
    </>
  );
}

export default List;