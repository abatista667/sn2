import React from 'react';
import NormalLayout from '../../Layout/Normal'
import AlbumThubnail from '../../components/AlbumThubnail';
import picture from '../../assets/profile.jpg'
import './Gallery.scss'

function GalleryPage() {
    return (
        <NormalLayout title="Gallery">
            <div className="albumn">
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
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
                    <AlbumThubnail img={picture} />
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
        </NormalLayout>
    );
}

export default GalleryPage