import React, { ChangeEvent, useState, FC, useEffect } from "react";
import styles from "./TextArea.module.scss";

interface InputProps {
	className?: string;
	name: string;
	defaultValue?: number | string;
	placeholder?: string;
	onChange: (value: string, name: string) => void;
	validationMessage?: string
	label?: string
}

const Input: FC<InputProps> = ({  className, name, defaultValue, onChange, placeholder, validationMessage, label }) => {
	const [value, setValue] = useState("");
	const handleChange = (ev: ChangeEvent) => {
		const newValue = (ev.target as HTMLInputElement).value || ""
		setValue(newValue);
		onChange(newValue, name);
	};

	useEffect(() => {
		if (defaultValue) setValue(defaultValue.toString())
	}, [defaultValue]) 

	return (
		<div className={`${styles.wrapper} ${className}`}>
			{label ? <label>{label}</label> : null}
			<textarea
				value={value}
				onChange={handleChange}
				className={styles.numberInput}
				placeholder={placeholder}
			/>
			{validationMessage ? <div className={styles.validation}>{validationMessage}</div> : null}
		</div>

	);
};

export default Input;
