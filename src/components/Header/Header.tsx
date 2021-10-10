import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import config from "../../Configuration";
import styles from "./Header.module.scss";

interface HeaderProps {
	addonLeft?: JSX.Element,
	addonRight?: JSX.Element
}

const Header: FC<HeaderProps> = ({ addonLeft, addonRight }) => {
	const { appName } = config;
	const history = useHistory()

	return (
		<header>
			<div className={styles.wrapper}>
				{addonLeft ?
					<ul>
						{addonLeft}
					</ul> : null}
				<span onClick={() =>{ history.push('/')}}>{appName}</span>
				<ul>
					{addonRight}
				</ul>
			</div>

		</header>
	);
};

export default Header;
