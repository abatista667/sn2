
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { ReactComponent as Plus } from '../../assets/svg/camera.svg'
import './FileUploader.scss'

const FileUploader = () => {
    const [pic, setPic] = useState('')
    const [showSelectedPic, setShowSelectedPic] = useState(false)
    const fileRef = useRef()
    const open = () => {
        fileRef.current.click()
    }
    const choosePic = () => {
        var fr = new FileReader();
        fr.onload = function () {
            setPic(fr.result);
            setShowSelectedPic(true)
        }
        fr.readAsDataURL(fileRef.current.files[0]);
    }

    const closeModal = () => {
        setShowSelectedPic(false);
        setPic('')
    }
    return <div className="picSelector">
        <div className="picSelectorButton">
            <Plus onClick={open}  className="icon" />
        </div>
        {showSelectedPic && 
            <div className="picSelectorImgWrapper">
                <div className="picSelectorImgContainer">
                    <img className="selectedPic" src={pic} />
                    <div className="buttonWrapper">
                        <button>Subir</button>
                        <button className="secondary" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>}
        <input ref={fileRef}
            className="updloader"
            type="file"
            name="pic"
            accept=".jpg,.png,.bmp,gif"
            onChange={choosePic}
        />
    </div>
}

export default FileUploader