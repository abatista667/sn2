import React, { FC } from "react";
import Header from "../components/Header/Header";
import { ReactComponent as Bell } from '../assets/svg/bell.svg'
import { ReactComponent as User } from '../assets/svg/user.svg'
import { ReactComponent as Menu } from '../assets/svg/menu.svg'

import styles from './Registration.module.scss';

interface NormalLayout {
}

const NormalLayout: FC<NormalLayout> = ({ children }) => {
    const AddonRight = () => <>
        <li><Bell /></li>
        <li><User /></li>
    </>
    const AddonLeft = () => <>
        <li><Menu /></li>
    </>

    const header = <Header addonRight={<AddonRight />} />
    return (
        <div>
            {header}
            <div className={styles.Layout}>
                {children}
            </div>
        </div>
    );
}


export default NormalLayout;