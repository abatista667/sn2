import React, { FC } from "react";
import Header from "../components/Header/Header";
import  Bell from '../pages/Notification/NotificationBell'
import styles from './Registration.module.scss';

interface NoFooter {
    title?: string
}

const NoFooter: FC<NoFooter> = ({ children, title }) => {
    const AddonRightHeader = () => <>
        <li><Bell /></li>
    </>

    const header = <Header addonRight={<AddonRightHeader />} />
    return (
        <div>
            {header}
            <div className={styles.layout}>
                {title ? <h1>{title}</h1> : null}
                {children}
            </div>
        </div>
    );
}


export default NoFooter;