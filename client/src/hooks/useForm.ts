import { useState, ChangeEvent } from 'react';

interface State {
	[key: string]: any
}

const useForm = (initialState: any) => {

	const [state, setState] = useState(initialState);

	// Store input value in state
	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, type } = e.target;
		// Event persistence
		e.persist();

		const getValue = () => {
			if (type === 'checkbox') return (e.target as HTMLInputElement).checked;
			else if (type === 'select-one') {
				const selectedIndex = (e.target as HTMLSelectElement).options.selectedIndex;
				return (e.target as HTMLSelectElement).options[selectedIndex].value
			}
			return e.target.value;
		}
		const value = getValue();

		setState((state: any) => ({ ...state, [name]: value }));
	};

	return [state, setState, handleChange];
};

export default useForm;