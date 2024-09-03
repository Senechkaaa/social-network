import { Button } from '@shared/ui/Button'
import { useSlidebarItems } from '../../models/selectors/getSlidebarItem'
import { SidebarItem } from '../SlidebarItem/SidebarItem'
import cl from './Slidebar.module.scss'
import { Link } from 'react-router-dom'
import { AUTH_ROUTE } from '@shared/consts/routes'

export const Sidebar = () => {
    const sidebarItemsList = useSlidebarItems()

    return (
        <div className={cl.slidebar_container}>
            <nav className={cl.slidebar_nav}>
                <ul>
                    {sidebarItemsList.map((item) => (
                        <SidebarItem item={item} />
                    ))}
                </ul>
            </nav>
            <div>
                <Link to={AUTH_ROUTE}>
                    <Button
                        br="medium-rd"
                        padding="padding-medium"
                        size="medium"
                    >
                        Log out
                    </Button>
                </Link>
            </div>
        </div>
    )
}
