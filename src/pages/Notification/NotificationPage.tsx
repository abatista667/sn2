import React from "react";
import styles from './Notification.module.scss';
import me from '../../assets/me.png'
import List from "../../components/List/List";
import { SmallCirclePicture } from "../../components/CirclePictureContainer/CirclePictureContainer";
import NoFooter from "../../Layout/NoFooter";

interface Notification {
    userName: string;
    type: "comment" | "Like" | "dislike" | "tag"
    postId: number;
    profilePicture: string;
}

const mockData: Notification[] = [
    {
        userName: 'abatista',
        type: 'Like',
        postId: 0,
        profilePicture: me
    },
    {
        userName: 'abatista',
        type: 'dislike',
        postId: 0,
        profilePicture: me
    },
    {
        userName: 'abatista',
        type: 'comment',
        postId: 0,
        profilePicture: me
    },
    {
        userName: 'abatista',
        type: 'tag',
        postId: 0,
        profilePicture: me
    },
]

const renderNotification = ({ userName, type, postId }: Notification) => {
    const getMessage = () => {
        switch (type) {
            case 'Like':
                return <><strong>{userName}</strong> likes in post</>
            case 'comment':
                return <><strong>{userName}</strong> commented in your post</>
            case 'dislike':
                return <><strong>{userName}</strong> dislikes your post</>
            case 'tag':
                return <><strong>{userName}</strong> tagged you in a post</>
        }
    }

    return <div className={styles.message}>
        <SmallCirclePicture src={me} alt={userName} />
        <div>{getMessage()}</div>
    </div>
}

const NotificationPage = () => {
    return <NoFooter title="Notifications">
        <List elements={mockData} mapper={renderNotification} />
    </NoFooter>
}


export default NotificationPage;