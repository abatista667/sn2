import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Bell } from '../../assets/svg/bell.svg'


const NotificationBell = () => {
    const history = useHistory();
    const [isNotificationPage, setIsNotificaionPage] = useState(false);

    const handleBellClick = () =>{
        if(isNotificationPage){
            history.goBack();
            return;
        }
        history.push('/notifications');
    }

    useEffect(() =>{
        if(!isNotificationPage && history.location.pathname === '/notifications'){
            setIsNotificaionPage(true)
        }    
        if(isNotificationPage && history.location.pathname !== '/notifications'){
            setIsNotificaionPage(false)
        }    
    }, [history.location.pathname])

    return <>
        <Bell onClick={handleBellClick} />
    </>
}


export default NotificationBell