import React, { FC } from "react";
import Header from "../components/Header/Header";
import styles from './Registration.module.scss';
import Back from "../components/Back/Back";

interface ChatLayout {
}

const ChatLayout: FC<ChatLayout> = ({ children }) => {
    const AddonRightHeader = () => <>
        <li><Back /></li>
    </>

    const header = <Header addonRight={<AddonRightHeader />} />
    return (
        <div>
            {header}
            <div className={styles.Layout}>
                {children}
            </div>
        </div>
    );
}


export default ChatLayout;