import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

interface Props {
	name: string;
	value: string;
	onChange: any;
	onBlur: any;
	label: string;
	placeholder: string;
}

const FormGroupComponent: React.FC<Props> = ({
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	label,
}) => {
	return (
		<FormGroup>
			<Label for={name}>{label}</Label>
			<Input
				type='text'
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</FormGroup>
	);
};

export default FormGroupComponent;