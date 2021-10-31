import React, { FC } from 'react'
import classNames from 'classnames'
import './CirclePictureContainer.scss'

interface CirclePictureProps{
    src: string;
    className?: string;
    small?: boolean
    alt?: string
}

const CirclePictureContainer: FC<CirclePictureProps> = ({ src, className }) => {
    return <div className={`ImgColoredCircleBorder ${className}`}>
        <img src={src} />
    </div>
}

export const SmallCirclePicture: FC<CirclePictureProps> = ({ src, alt, small }) => <img src={src} alt={alt} className={classNames('smallRoundImg', { ['small']: small })} />




export default CirclePictureContainer