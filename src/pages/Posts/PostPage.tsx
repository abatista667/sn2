import React, { FC } from 'react'
import me from '../../assets/me.png'
import profile from '../../assets/profile.jpg'
import NormalLayout from '../../Layout/Normal'
import { ReactComponent as Like } from '../../assets/svg/like.svg'
import { ReactComponent as Dislike } from '../../assets/svg/dislike.svg'
import { ReactComponent as Comment } from '../../assets/svg/comment.svg'
import styles from './Post.module.scss'
import Post from '../../models/Post'
import { useAtom } from 'jotai'
import postAtom from '../../store/post'
import PostEditor from './PostEditor'

const PostPage = () => {
    const [posts] = useAtom(postAtom)
    return <NormalLayout>
        <PostEditor />
        <div className={styles.posts}>
            {posts.map(item => <WallElement {... item} />)}
        </div>
    </NormalLayout>
}

const WallElement: FC<Post> = ({username, img, profilePic, ago}) => {
    const user = {
        profilePic,
        name: username
    }
    return <>
        <div className={styles.separator} />
        <div className={styles.element}>
            <WallElementHeader user={user} ago={ago} />
            <div className={styles.imgElementWrapper}>
                <img src={img[0]} />
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

const WallElementHeader: FC<{ user: any, ago: string }> = ({ user, ago }) => {
    return <>
        <div className={styles.header}>
            <div className={styles.imgWrapper}>
                <img src={user.profilePic} />
            </div>
            <div className={styles.text}>
                <h6>{user.name}</h6>
                <span>{ago}</span>
            </div>
        </div>
    </>
}


export default PostPage