import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import Layout from './layouts/Layout'
import { AUTH_ROUTE, CHATS_ROUTE, MY_PAGE_ROUTE } from '@shared/consts/routes'

const AppRouter = () => {
    const isAuth = true

    return isAuth ? (
        <Routes>
            <Route path="/" element={<Layout />}>
                {privateRoutes.map((route) => (
                    <Route
                        key={route.path}
                        element={<route.element />}
                        path={route.path}
                    />
                ))}
            <Route path="*" element={<Navigate to={CHATS_ROUTE} />} />
            </Route>
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    element={<route.element />}
                    path={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter
