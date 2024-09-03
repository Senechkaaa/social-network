import { SlidebarItemType } from '@shared/types/slidebarItemType'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import cl from './AppLink.module.scss'

interface AppLinkProps {
    item: SlidebarItemType
}

const AppLink: FC<AppLinkProps> = ({ item }) => {
    return (
        <NavLink  className={({ isActive }) => `${cl.item_link} ${isActive ? cl.active_item_link : ''}`} to={item.path}>
          <div className={cl.item_icon}>{<item.icon/>}</div>
            
            <h3 className={cl.item_title}>{item.text}</h3>
        </NavLink>
    )
}

export default AppLink
