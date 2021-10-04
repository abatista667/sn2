import React, { FC } from "react";
import { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./ComboBox.module.scss";

interface ComboBoxProps {
	label: string;
	name: string;
	className?: string;
	items: Item[];
	onSelect: (value: string) => void;
	defaultValue?: string;
}

export interface Item {
	text: string;
	value: string;
}

const ComboBox: FC<ComboBoxProps> = ({
	label,
	name,
	className,
	items,
	onSelect,
	defaultValue
}) => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState("");
	const [filteredList, setFilteredList] = useState<Item[]>([]);

	const handleClickOutside = () => {
		setIsActive(false);
	};

	const handleSelect = (item: Item) => {
		setIsActive(false);
		onSelect(item.value);
		setValue(item.text);
		setFilteredList(items);
	};

	const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const { value } = ev.target;
		setValue(value);
		setFilteredList(
			items.filter((item) =>
				item.text.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
			)
		);
	};

	useEffect(() => {
		setFilteredList(items);
	}, [items]);

	useEffect(() => {
		if(filteredList.length === 0) return;

		const item = filteredList.filter(item => item.value === defaultValue)[0] || {} 
		setValue(item.text);
	}, [defaultValue, filteredList]);

	return (
		<>
			<div className={`${styles.comboBox} ${className}`} data-test={name}>
				<label htmlFor={name}>{label}</label>
				<input
					name={name}
					onClick={() => setIsActive(true)}
					value={value}
					onChange={handleInputChange}
				/>
				<ul className={isActive ? styles.active: undefined}>
					{filteredList?.map((item) => (
						<li key={item.value} onClick={() => handleSelect(item)}>
							{item.text}
						</li>
					))}
				</ul>
			</div>
			<div
				className={`comboBoxOutside ${isActive ?styles.active : undefined}`}
				onClick={handleClickOutside}
			/>
		</>
	);
};

export default ComboBox;
