import React from "react";
import NormalLayout from "../../Layout/Normal";
import styles from './Contacts.module.scss';
import me from '../../assets/me.png'
import List from "../../components/List/List";
import { SmallCirclePicture } from "../../components/CirclePictureContainer/CirclePictureContainer";


interface Contact {
    userName: string;
    contactId: number;
    profilePicture: string;
}

const mockData: Contact[] = [
    {
        userName: 'abatista',
        contactId: 0,
        profilePicture: me
    },
    {
        userName: 'primo',
        contactId: 0,
        profilePicture: me
    },
    {
        userName: 'keren',
        contactId: 0,
        profilePicture: me
    },
    {
        userName: 'estrella',
        contactId: 0,
        profilePicture: me
    },
]

const renderContact = ({ userName, contactId }: Contact) => {
    return <div className={styles.message}>
        <SmallCirclePicture src={me} alt={userName} />
        <div><strong>{userName}</strong></div>
    </div>
}

const ContactPage = () => {
    return <NormalLayout title="Contacts">
        <List elements={mockData} mapper={renderContact} />
    </NormalLayout>
}


export default ContactPage;