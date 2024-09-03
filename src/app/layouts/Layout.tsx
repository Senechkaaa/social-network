import { Sidebar } from '@widgets/sidebar'
import { Outlet } from 'react-router-dom'
import cl from './Layout.module.scss'
import { Header } from '@widgets/header'

const Layout = () => {

    return (
        <div className={cl.layout}>
            <Header />
            <div className={cl.cont}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
