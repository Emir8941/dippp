import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/context'

const SideBaritem = ({ text, value }) => {
    const { category, changeCategory } = useContext(CustomContext)
    return (
        <li onClick={() => changeCategory(value)} className={`sideBar_menu-item ${category === text ? 'active' : ''}`}>{text}</li>

    )
}

export default SideBaritem
