import React, { FC } from 'react'
import me from '../../assets/me.png'
import profile from '../../assets/profile.jpg'
import NormalLayout from '../../Layout/Normal'
import { ReactComponent as Like } from '../../assets/svg/like.svg'
import { ReactComponent as Dislike } from '../../assets/svg/dislike.svg'
import { ReactComponent as Comment } from '../../assets/svg/comment.svg'
import styles from './Post.module.scss'

const Post = () => {
    return <NormalLayout>
        <div className={styles.posts}>
            <WallElement />
            <WallElement />
            <WallElement />
        </div>
    </NormalLayout>
}

const WallElement = () => {
    const user = {
        profilePic: profile,
        name: 'Ariel Batista'
    }
    return <>
        <div className={styles.separator} />
        <div className={styles.element}>
            <WallElementHeader user={user} />
            <div className={styles.imgElementWrapper}>
                <img src={me} />
            </div>
            <hr />
            <div className={styles.actionWrapper}>
                <Like />
                <Dislike />
                <Comment />
            </div>
        </div>
    </>
}

const WallElementHeader: FC<{ user: any }> = ({ user }) => {
    return <>
        <div className={styles.header}>
            <div className={styles.imgWrapper}>
                <img src={user.profilePic} />
            </div>
            <div className={styles.text}>
                <h6>{user.name}</h6>
                <span>1h</span>
            </div>
        </div>
    </>
}


export default Post