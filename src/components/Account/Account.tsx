import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as User } from '../../assets/svg/user.svg'


const Account = () => {
    const history = useHistory();
    const [isProfilePage, setIsProfilePage] = useState(false);

    const handleIconClick = () =>{
        if(isProfilePage){
            history.goBack();
            return;
        }
        history.push('/profile');
    }

    useEffect(() =>{
        if(!isProfilePage && history.location.pathname === '/profile'){
            setIsProfilePage(true)
        }    
        if(isProfilePage && history.location.pathname !== '/profile'){
            setIsProfilePage(false)
        }    
    }, [history.location.pathname])

    return <>
        <User onClick={handleIconClick} />
    </>
}


export default Account