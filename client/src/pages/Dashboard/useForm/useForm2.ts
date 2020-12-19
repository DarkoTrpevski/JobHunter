import { useState } from "react";

export const useFormFields = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    setValues,
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { type, name } = e.target;
      const getValue = () => {
        if (type === 'checkbox') {
            return (e.target as HTMLInputElement).checked;
          }
          else if (type === 'select-one') {
            const selectedIndex = (e.target as HTMLSelectElement).options.selectedIndex;
            return (e.target as HTMLSelectElement).options[selectedIndex].value
          }
          return e.target.value;
      }
      const value = getValue();

      setValues({
        ...values,
        [name]: value
      });
    }
  ];
}