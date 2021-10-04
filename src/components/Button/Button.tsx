import React, { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children: JSX.Element | string;
	onClick: () => void;
	type?: 'primary' | 'secundary' | 'transparent';
	size?: 'small' | 'medium' | 'big'
	disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'primary', disabled, size = 'medium' }) => {
	const className = `${styles.button} ${styles[type]} ${styles[size] }`;
	return (
		<button onClick={onClick} className={className} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
