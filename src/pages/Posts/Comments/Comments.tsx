import React, { FC } from "react";
import { SmallCirclePicture } from "../../../components/CirclePictureContainer/CirclePictureContainer";
import me from '../../../assets/me.png'
import styles from './Comment.module.scss';

interface CommentProps {
    userName: string;
    content : string
}

const Comment: FC<CommentProps> = ({ userName, content }) => {
    return <div className={styles.comment}>
        <SmallCirclePicture src={me} alt={userName} small />
        <div className={styles.text}>
            <h6>{userName}</h6>
            <span>{content}</span>
        </div>
    </div>
}

export default Comment;