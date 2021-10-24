
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { ReactComponent as Plus } from '../../../assets/svg/plus.svg'
import Button from '../../../components/Button'
import Modal from '../../../components/Modal/Modal'
import './FileUploader.scss'

const FileUploader = () => {
    const [previewPic, setPreviewPic] = useState('')
    const [showSelectedpreviewPic, setShowSelectedpreviewPic] = useState(false)
    const fileRef = useRef()
    const open = () => {
        fileRef.current.click();
    }
    const choosepreviewPic = () => {
        var fr = new FileReader();
        fr.onload = function () {
            setPreviewPic(fr.result);
            setShowSelectedpreviewPic(true)
        }
        fr.readAsDataURL(fileRef.current.files[0]);
    }

    const closeModal = () => {
        setShowSelectedpreviewPic(false);
        setPreviewPic('')
    }

    useEffect(() =>{
        open();
    },[])
    return <div className="picSelector">
        {showSelectedpreviewPic &&
            <Modal close={closeModal}>
                <div className="picSelectorImgWrapper">
                    <div className="picSelectorImgContainer">
                        <img className="selectedPic" src={previewPic} />
                        <div className="buttonWrapper">
                            <Button>Upload</Button>
                            <Button secundary onClick={closeModal}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Modal>}
        <input ref={fileRef}
            className="updloader"
            type="file"
            name="previewPic"
            accept=".jpg,.png,.bmp,gif"
            onChange={choosepreviewPic}
        /> 
    </div>

}

export default FileUploader