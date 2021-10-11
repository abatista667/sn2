import React from "react";
import ChatLayout from "../../Layout/Chat";
import styles from './Chat.module.scss';
import { ReactComponent as Send } from '../../assets/svg/send.svg'
import me from '../../assets/me.png'
import Input from "../../components/Input";
import classnames from 'classnames'

interface Message {
    picture: string;
    username: string;
    ago: string;
    message: string;
    type: 'text' | 'image';
}

const mockData: Message[] = [
    {
        picture: me,
        username: 'abatista',
        ago: '1 min',
        message: 'this is a test message',
        type: 'text'
    },
    {
        picture: me,
        username: 'primo',
        ago: '1 min',
        message: 'this is a test message',
        type: 'text'
    }
];

const renderMessage = ({ picture, username, ago, message }: Message, currentUser: string) => {
    return <div className={classnames(styles.message, {
        [styles.current]: currentUser === username
    })}>
        <img src={picture} alt={username} />
        <div className={styles.messageContent}>
            <div className={styles.username}>{username}</div>
            <div>{message} <span>{ago}</span></div>
        </div>
    </div>
}


const ChatPage = () => {
    return <ChatLayout>
        <div className={styles.messages}>
            {mockData.map(msg => renderMessage(msg, 'abatista'))}
        </div>
        <div className={styles.inputWrapper}>
            <Input name={"message"} onChange={function (value: string, name: string): void {
                throw new Error("Function not implemented.");
            }} className={styles.input} />
            <Send />
        </div>
    </ChatLayout>
}


export default ChatPage;