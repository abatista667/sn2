import React from 'react'
import './CirclePictureContainer.scss'

const CirclePictureContainer = ({ src, className }) => {
    return <div className={`ImgColoredCircleBorder ${className}`}>
            <img src={src} />
        </div>
}

export default CirclePictureContainer