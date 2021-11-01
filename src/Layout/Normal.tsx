import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bell from '../pages/Notification/NotificationBell'
import { ReactComponent as Chat } from '../assets/svg/chat.svg'
import { ReactComponent as Menu } from '../assets/svg/menu.svg'
import { ReactComponent as Account } from '../assets/svg/user.svg'
import { ReactComponent as List } from '../assets/svg/earth.svg'
import styles from './Registration.module.scss';
import { useHistory } from "react-router-dom";

interface NormalLayout {
    title?: string
}

const NormalLayout: FC<NormalLayout> = ({ children, title }) => {
    const history = useHistory();
    const AddonRightHeader = () => <>
        <li><Bell /></li>
    </>
    const AddonLeftFooter = () => <>
        <li><List onClick={() => history.push('/posts')} /></li>
        <li><Chat onClick={() => history.push('/chat')} /></li>
        <li><Account onClick={() => history.push('/profile/edit')} /></li>
        <li><Menu onClick={() => history.push('/')} /></li>
    </>

    const header = <Header addonRight={<AddonRightHeader />} />
    return (
        <div>
            <div className={styles.layout}>
                {header}
                {title ? <h1>{title}</h1> : null}
                {children}
                <div className={styles.margin}></div>
            </div>
            <Footer addonRight={<AddonLeftFooter />} />
        </div>
    );
}


export default NormalLayout;