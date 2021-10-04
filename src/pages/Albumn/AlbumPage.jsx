import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header'
import Body from '../../components/Body';
import NewAlbum from './NewAlbum';
import AlbumThubnail from '../../components/AlbumThubnail';
import picture from '../../assets/profile.jpg'

function Profile() {
    return (
            <Body>
                <div className="albumn">
                    <NewAlbum />
                    <div className="Albumnes">
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                        <AlbumThubnail img={picture} />
                    </div>
                </div>
            </Body>
    );
}

const ProfileContainer = () => {
    return <Profile />
}


export default ProfileContainer