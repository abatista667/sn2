import React from "react";
import NormalLayout from "../../Layout/Normal";
import styles from './Menu.module.scss';
import List from "../../components/List/List";
import { Link } from "react-router-dom";


interface Menu {
    label: string;
    route: string;
    picture?: string;
}

const mockData: Menu[] = [
    {
        label: 'posts',
        route: '/posts',
    },
    {
        label: 'chat',
        route: '/chat',
    },
    {
        label: 'profile',
        route: '/profile/edit',
    },
    {
        label: 'login',
        route: '/login',
    },
    {
        label: 'notifications',
        route: '/notifications',
    },
    {
        label: 'contacts',
        route: '/contacts',
    },
    {
        label: 'gallery',
        route: '/gallery',
    },
]

const renderMenu = ({ label, route }: Menu) => {
    return <div className={styles.message}>
        <div><Link to={route}><strong>{label}</strong></Link></div>
    </div>
}

const MenuPage = () => {
    return <NormalLayout title="Menu">
        <List elements={mockData} mapper={renderMenu} />
    </NormalLayout>
}


export default MenuPage;