import React, { useState } from 'react'
import './Tabs.scss'

const TabsHeader = ({ tabs = [], active = 0, setActive }) => {
    return tabs.map((item, index) => {
        if (index == active)
            return <div className="tabHeader active">{item.title}</div>
        else
            return <div className="tabHeader" onClick={() => setActive(index)}>{item.title}</div>
    })
}

const TabsBody = ({ tabs = [], active = 0 }) => {
    return <div className="tabBody">{tabs[active].body}</div>
}

const Tabs = ({ tabs = [] }) => {
    const [active, setActive] = useState(0)
    return <>
        <div className="tabHeaderContainer">
            <TabsHeader tabs={tabs} active={active} setActive={setActive}></TabsHeader>
        </div>
        <TabsBody tabs={tabs} active={active}></TabsBody>
    </>
}

export default Tabs