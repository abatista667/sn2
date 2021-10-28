import React, { useState } from "react";
import TextArea from "../../components/TextArea";
import NormalLayout from "../../Layout/Normal";
import { ReactComponent as Picture } from '../../assets/svg/images.svg'
import { ReactComponent as Send } from '../../assets/svg/send.svg'
import styles from './PostEditor.module.scss';
import FileUploader from "./FileUploader/FileUploader";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import me from '../../assets/me.png'

const PostEditor = () => {
    const [img, setImg] = useState<string[]>([me])
    const [showFileUploader, setShowFileUploader] = useState(false)
    const handleImageUpdload = (images: string[]) => {
        setImg(images);
        setShowFileUploader(false)
    }

    return <NormalLayout title="Create Post">
        <div className={styles.postEditor}>
            <TextArea name="post" onChange={() => { }} placeholder="What's on your mind?" />
            {img && <div className={styles.imageWrapper}>
                <ImageSlider images={img} />
            </div>}
            <div className={styles.buttonWrapper}>
                <a onClick={() => setShowFileUploader(true)}><Picture />Attach</a>
                <a><Send />Post it</a>
            </div>
        </div>
        {showFileUploader &&
            <FileUploader onClose={handleImageUpdload} />}
    </NormalLayout>
}

export default PostEditor