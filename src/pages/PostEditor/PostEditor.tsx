import React, { useState } from "react";
import TextArea from "../../components/TextArea";
import NormalLayout from "../../Layout/Normal";
import { ReactComponent as Picture } from '../../assets/svg/images.svg'
import { ReactComponent as Send } from '../../assets/svg/send.svg'
import styles from './PostEditor.module.scss';
import FileUploader from "./FileUploader/FileUploader";

const PostEditor = () => {
    const [img, setImg] = useState('')
    const [showFileUploader, setShowFileUploader] = useState(false)

    return <NormalLayout title="Create Post">
        <div className={styles.postEditor}>
            <TextArea name="post" onChange={() => { }} placeholder="What's on your mind?" />
            {img && <img src={img} />}
            <div className={styles.buttonWrapper}>
                <a onClick={() =>setShowFileUploader(true)}><Picture />Attach</a>
                <a><Send />Send</a>
            </div>
        </div>
        {showFileUploader &&
            <FileUploader />}
    </NormalLayout>
}

export default PostEditor