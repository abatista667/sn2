import React from "react";
import NormalLayout from "../../Layout/Normal";
import styles from './Notification.module.scss';
import me from '../../assets/me.png'
import CirclePictureContainer from "../../components/CirclePictureContainer/CirclePictureContainer";

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

    return <li><div className={styles.message}>
        <img src={me} alt={userName} />
        <div>{getMessage()}</div>
    </div>
    </li>
}

const NotificationPage = () => {
    return <NormalLayout>
        <ul className={styles.notifications}>
            {mockData.map(renderNotification)}
        </ul>
    </NormalLayout>
}


export default NotificationPage;