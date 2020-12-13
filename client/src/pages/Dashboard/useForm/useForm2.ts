import { useState } from "react";

export const useFormFields = (initialState: any) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { type, name } = e.target;
      const getValue = () => {
          if (type === 'checkbox') {
            return (<HTMLInputElement>e.target).checked;
          }
          else if (type === 'select-multiple') {
            return Array.from((<HTMLSelectElement>e.target).selectedOptions).map(o => o.value);
          }
          return e.target.value;
      }
      const value = getValue();

      setValues({
        ...fields,
        [name]: value
      });
    }
  ];
}