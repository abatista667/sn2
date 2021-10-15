import React from 'react'
import { withRouter } from 'react-router-dom';

const AlbumThubnail = ({ img, name="TEST", price="5 USD", history }) => {
    return <div className="thubnail" onClick={() => history.push('gallery')}>
        <img src={img} />
        <div>{name} - {price}</div>
    </div>
}

export default withRouter(AlbumThubnail);