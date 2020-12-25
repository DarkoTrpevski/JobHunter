import React from 'react'

interface Props<T> {
  data: T[];
  onRowClick: (item: T) => void;
}

const List = <T extends object>({ data, onRowClick }: Props<T>) => {

  if(data.length === 0) return null;
  return (
    <table>
      <thead>
        Some Title/Head
      </thead>
      <tbody>
        {
        data.map((item: T, index: number) => (
          <tr key={index} onClick={() => onRowClick(item)}>
            {
            (Object.keys(data[0]) as Array<keyof T>).map(key => (
              <td key={key.toString()}>{item[key]}</td>)
            )
            }
          </tr>
        ))
        }
      </tbody>
    </table>
  );
}
export default List;