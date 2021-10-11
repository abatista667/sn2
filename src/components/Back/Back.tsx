import React, { FC} from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/svg/arrow-left.svg'

const Back = () => {
    const history = useHistory();

    return <>
        <Arrow onClick={() =>  history.goBack()} />
    </>
}


export default Back;