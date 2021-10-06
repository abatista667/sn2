import React from 'react';
import profile from '../assets/profile.jpg'
import CirclePictureContainer from './CirclePictureContainer';
import { Link } from 'react-router-dom'

function SideOptions({ profilePicture, username }) {
    return (
        <div className="sideOptions">
            <div className="profilePicturePosition">
                <div className="profilePictureContainer">
                    <CirclePictureContainer>
                        <img src={profilePicture} />
                    </CirclePictureContainer>
                </div>
            </div>
            <div className="userLabel">
                {username}
            </div>
            <ul>
            <li><Link to="/profile">Mi perfil</Link></li>
            <li><Link to="/albumn">Mis albumnes</Link></li>
            <li><Link to="/wall">Muro</Link></li>
            <li><Link to="/login">Cerrar sesion</Link></li>
            </ul>
        </div>
    );
}

const SideOptionsContainer = () => {
    const img = profile
    const username = "abatista667"
    return <SideOptions profilePicture={img} username={username} />
}


export default SideOptionsContainer