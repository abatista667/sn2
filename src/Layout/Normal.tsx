import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import  Bell from '../pages/Notification/NotificationBell'
import { ReactComponent as Menu } from '../assets/svg/menu.svg'
import styles from './Registration.module.scss';
import Account from "../components/Account/Account";

interface NormalLayout {
}

const NormalLayout: FC<NormalLayout> = ({ children }) => {
    const AddonRightHeader = () => <>
        <li><Bell /></li>
    </>
    const AddonLeftFooter = () => <>
        <li><Account /></li>
        <li><Menu /></li>
    </>

    const header = <Header addonRight={<AddonRightHeader />} />
    return (
        <div>
            {header}
            <div className={styles.Layout}>
                {children}
            </div>
            <Footer addonRight={<AddonLeftFooter />} />
        </div>
    );
}


export default NormalLayout;