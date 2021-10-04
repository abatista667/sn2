import React from 'react'

const NewAlbum = () => {
    return <div className="newAlbum">
        <label className="newAlbumLabel">Crear Nuevo Album</label>
        <input placeholder="Nombre" />
        <select>
            <option>5 USD</option>
            <option>10 USD</option>
            <option>20 USD</option>
            <option>50 USD</option>
            <option>Gratis</option>
        </select>
        <button>Crear</button>
    </div>
}


export default NewAlbum