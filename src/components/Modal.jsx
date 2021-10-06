
import React from 'react'
import { useEffect } from 'react'


const Modal = ({ close, children }) => {
    const handleKeyDown = (ev) => {
        if (ev.keyCode === 27) {
            close();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    return <div className="modalWrapper">
        {children}
    </div>
}

export default Modal