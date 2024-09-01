import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

const AppRouter = () => {
    const isAuth = true

    return isAuth ? (
        <Routes>
            {privateRoutes.map(route => (
                <Route key={route.path} element={<route.element />} path={route.path} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(route => (
                <Route key={route.path} element={<route.element />} path={route.path} />
            ))}
        </Routes>
    )
}

export default AppRouter
