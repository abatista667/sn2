import React from 'react'
import { withRouter } from 'react-router-dom';

const AlbumThubnail = ({ img }) => {
    return <div className="thubnail" onClick={undefined}>
        <img src={img} />
    </div>
}

export default withRouter(AlbumThubnail);