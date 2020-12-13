import { useState } from 'react';


const useForm = ({ initialValues = {} } = {}) => {

    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (onSubmit: (val: any, e: React.FormEvent) => void) => {
      return (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(values, e);
      }
    };

    return {
        values,
        setValues,
        handleChange,
        handleSubmit,
    }
};

export default useForm;