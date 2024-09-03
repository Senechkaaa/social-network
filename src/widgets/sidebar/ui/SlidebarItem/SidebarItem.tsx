import { FC } from 'react'
import AppLink from '@shared/ui/AppLink/AppLink'
import { SlidebarItemType } from '@shared/types/slidebarItemType'
import cl from './SlidebarItem.module.scss'

interface SlidebarItemProps {
    item: SlidebarItemType
}

export const SidebarItem: FC<SlidebarItemProps> = ({ item }) => {
    return (
        <li className={cl.item}>
            <AppLink item={item} />
        </li>
    )
}
