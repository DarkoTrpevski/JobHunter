import React from 'react';
import { ListItemProps } from './ListItem';

export type ListComponent<T = {}> = React.FC<ListItemProps<T>>;


export interface SelectProps<T>{
  items: T[];
  itemComponent: ListComponent<T>;
  onItemClick: (item: T) => void;
  saveJob?: (item: T) => void;
  darkMode: boolean;
  loading: boolean;
  isEditable?: boolean;
}

const List = <T extends object>(props: SelectProps<T>) => {
  
  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE

  const { items, itemComponent: ItemComponent, onItemClick, saveJob, darkMode, loading, isEditable } = props;

  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
  // SAVE JOB KJE SE UPOTREBI VO SEARCH PAGE, A NEMA DA SE UPOTREBI VO DASHBOARD PAGE
  return (
    <>
      {items.map((item: T, idx: number)=> {
        return (
          <ItemComponent key={idx} value={item} onItemClick={onItemClick} saveJob={saveJob} darkMode = {darkMode} loading= {loading} isEditable = {isEditable} />
        );
      })}
    </>
  );
}

export default List;