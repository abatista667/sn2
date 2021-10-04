import React, { FC } from "react";
import styles from "./Header.module.scss";
import {ReactComponent  as Earth} from '../../assets/svg/earth.svg'

interface HeaderProps {
	addonLeft?: JSX.Element,
	addonRight?: JSX.Element
}

const Header: FC<HeaderProps> = ({ addonLeft, addonRight }) => {
	return (
		<header>
			<div className={styles.wrapper}>
				{addonLeft ?
					<ul>
						{addonLeft}
					</ul> : null}
				<span><Earth fill="white" height="26x" /></span>
				<ul>
					{addonRight}
				</ul>
			</div>

		</header>
	);
};

export default Header;
