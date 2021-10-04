import React, { FC } from "react";
import styles from "./Form.module.scss";

interface Props {
}

const Form: FC<Props> = ({ children }) => (
	<div className={styles.form}>{children}</div>
);

export default Form;
