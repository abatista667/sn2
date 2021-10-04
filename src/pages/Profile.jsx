import { Profiler } from "react"
import React from 'react'
import Body from "../components/Body"
import Tabs from "../components/Tabs"

const Personal = () => (<div className="personal">
    <label>Descripción</label>
    <textarea>este soy yo</textarea>
</div>);

const MyInformation = () => (<div>
    <label>Correo Electronico</label>
    <input />
</div>);

const tabs = [
    { title: "informacion personal", body: <Personal /> },
    { title: "informacion de la cuenta", body: <MyInformation /> }
]

const Profile = () => {
    return <Body>
        <div className="profile">
            <Tabs tabs={tabs} />
        </div>
    </Body>
}


export default Profile;