import React, { FC } from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
	addonLeft?: JSX.Element,
	addonRight?: JSX.Element
}

const Footer: FC<FooterProps> = ({ addonLeft, addonRight }) => {
	return (
		<footer>
			<div className={styles.wrapper}>
				{addonLeft ?
					<ul>
						{addonLeft}
					</ul> : null}
				<div />
				{addonRight ?
					<ul className={styles.addonRight}>
						{addonRight}
					</ul> : null}
			</div>

		</footer>
	);
};

export default Footer;
