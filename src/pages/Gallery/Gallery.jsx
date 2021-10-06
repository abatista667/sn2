import React from 'react'
import me from '../assets/me.png'
import profile from '../assets/profile.jpg'
import { useState } from 'react'
import Modal from '../components/Modal'
import { useRef } from 'react'
import { useEffect } from 'react'
import FileUploader from './FileUploader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'

const BaseURl = "https://localhost:44371/";

const ImageContainer = ({ img, show }) => {
    const ref = useRef()
    const [style, setStyle] = useState({})

    const resize = () => {
        const s = {
            height: ref.current.clientHeight,
        }

        if (!style.height || style.height === '0px' || s.height != style.height)
            setStyle(s)
    }

    const toggle = (visible) => {
        const s = {
            ...style,
            display: visible ? 'block' : 'none'
        }
        setStyle(s)
    }

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    })

    return <div className="galleryImgContainer" onClick={show} onMouseOver={() => toggle(true)} onMouseLeave={() => toggle(false)}>
        <img ref={ref} src={img} />
    </div>
}


const Gallery = () => {
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState(0)
    const [pictures, setPicture] = useState([])

    const showItem = (item) => {
        setSelected(item)
        setShowModal(true)
        document.body.classList.add('bodyModal')
    }

    const closeModal = () => {
        document.body.classList.remove('bodyModal')
        setShowModal(false)
    }

    const next = (index) => {
        console.log(index, pictures.length)
        if (index == pictures.length - 1)
            setSelected(0);
        else
            setSelected(index + 1)
    }
    const previous = (index) => {
        console.log(index, pictures.length)
        if (index == 0)
            setSelected(pictures.length - 1)
        else
            setSelected(index - 1)
    }

    useEffect(() => {
        if (pictures.length === 0) {
            axios.get(BaseURl + "api/path").then(response => {
                    setPicture(response.data.map(img => BaseURl + img))
            })
        }
    })
    return <>
        <div className="gallery">
            <h1>TEST</h1>
            <FileUploader />
            <div className="galleryInner">
                {pictures.map((item, index) => <ImageContainer img={item} show={() => showItem(index)} />)}
            </div>
        </div>{
            showModal &&
            <Modal close={() => closeModal()}>
                <div className="ImageViewer">
                    <div className="closeModal"><FontAwesomeIcon icon="times-circle" className="closeBtn" onClick={closeModal} /></div>
                    <div className="arrow" onClick={() => previous(selected)}>{`<`}</div>
                    <div className="arrow arrowRight" onClick={() => next(selected)}>{`>`}</div>
                    <img className="modalImg" src={pictures[selected]} />
                </div>
            </Modal>}
    </>
}

export default Gallery