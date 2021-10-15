import React from 'react'
import './CirclePictureContainer.scss'

const CirclePictureContainer = ({ src, className }) => {
    return <div className={`ImgColoredCircleBorder ${className}`}>
            <img src={src} />
        </div>
}

export const SmallCirclePicture= ({ src, alt }) => <img src={src} alt={alt} className="smallRoundImg" />




export default CirclePictureContainer