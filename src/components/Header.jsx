import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBar = () => {
    const [placeHolder, setPlaceHolder] = useState('search')
    return <>
        <input className="searchBar" 
               placeholder={placeHolder} 
               onFocus={()=> setPlaceHolder('')}
               onBlur={()=> setPlaceHolder('search')} />
    </>
}

const Header = () => {
    return <>
        <div className="headerWrapper">
            <div className="headerInner">
                <div className="headerLogo">
                    <h1>Conoceme</h1>
                </div>
                <SearchBar />
                <div className="btnGroup">
                <FontAwesomeIcon icon="home" className="icon" />
                <FontAwesomeIcon icon="bell" className="icon" />
                <FontAwesomeIcon icon="envelope" className="icon" />
                <FontAwesomeIcon icon="comment-alt" className="icon" />
                <FontAwesomeIcon icon="user" className="icon" />
                </div>
            </div>
        </div>
    </>
}

export default Header