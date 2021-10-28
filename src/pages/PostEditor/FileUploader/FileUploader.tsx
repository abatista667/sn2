
import React, { FC, useEffect, createRef } from 'react'
import { useState } from 'react'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal/Modal'
import './FileUploader.scss'

interface FileReaderProps {
    onClose: (preview: string[]) => void;
}

const FileUploader: FC<FileReaderProps> = ({ onClose }) => {
    const [previewPic, setPreviewPic] = useState<string[]>([])
    const [showSelectedpreviewPic, setShowSelectedpreviewPic] = useState(false)
    const fileRef = createRef<HTMLInputElement>()
    const open = () => {
        fileRef.current?.click();
    }
    const choosepreviewPic = async () => {
        if (!fileRef.current || !fileRef.current.files) return;
        const arr = Array.from(fileRef.current?.files)

        const files = arr.map(async (item) => new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(item);

            reader.onload = function () {
                resolve(reader.result)
            }
        }));

        const result = await Promise.all(files);

        setPreviewPic(result as string[]);
        setShowSelectedpreviewPic(true);
    }

    const closeModal = () => {
        setShowSelectedpreviewPic(false);
        setPreviewPic([]);
    }
    const upload = () => {
        onClose(previewPic);
        closeModal();
    }

    useEffect(() => {
        open();
    }, [])
    return <div className="picSelector">
        {showSelectedpreviewPic &&
            <Modal close={closeModal}>
                <div className="picSelectorImgWrapper">
                    <div className="picSelectorImgContainer">
                        {previewPic.map(pic => <img className="selectedPic" src={pic as string} />
                        )}
                    </div>
                    <div className="buttonWrapper">
                        <Button onClick={upload}>Upload</Button>
                        <Button onClick={closeModal}>Cancel</Button>
                    </div>
                </div>
            </Modal>}
        <input ref={fileRef}
            className="updloader"
            type="file"
            name="previewPic"
            accept=".jpg,.png,.bmp,gif"
            onChange={choosepreviewPic}
            multiple
        />
    </div>

}

export default FileUploader