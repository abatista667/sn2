import React, { FC } from "react";
import styles from "./Panel.module.scss";

interface PanelProps {
}

const Panel: FC<PanelProps> = ({ children }) => (
	<div className={styles.panel}>{children}</div>
);

export default Panel;
