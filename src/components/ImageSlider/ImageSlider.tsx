import React, { FC, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ReactComponent as Picture } from '../../assets/svg/images.svg'
import styles from './ImageSlider.module.scss'

interface ImageSliderProps {
    images: string[]
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
    const [current, setCurrent] = useState(0)
    const handlers = useSwipeable({
        onSwiped: ({ dir }) => {
            if (dir === 'Left') {
                const maxRightLongitud = -((images.length - 1) * window.innerWidth);
                let newCurrent = current - window.innerWidth
                newCurrent = newCurrent <= maxRightLongitud ? maxRightLongitud : newCurrent
                setCurrent(newCurrent)
            } else if (dir === 'Right') {
                let newCurrent = current + window.innerWidth
                newCurrent = newCurrent >= 0 ? 0 : newCurrent
                setCurrent(newCurrent)
            }

        }
    });
    return <div className={styles.imageSlider}>
        <div className={styles.swipper}  {...handlers}></div>
        {images.length > 1 ? <Picture /> : null}
        <div className={styles.imgWrapper} style={{ transform: `translateX(${current}px)` }}>
            {images.map(src => <img src={src} />)}
        </div>
    </div>
}

export default ImageSlider;