import React, { FC } from "react";
import Header from "../components/Header/Header";
import styles from './Registration.module.scss';

interface RegistrationLayout{
    header: JSX.Element
}

const  RegistrationLayout :FC<RegistrationLayout> = ({header, children}) => {
    return (
        <div>
            {header}
            <div className={styles.layout}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </div>
    );
}


export default RegistrationLayout;