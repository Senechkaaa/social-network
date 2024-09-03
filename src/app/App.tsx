import AppRouter from './AppRouter'
import cl from './styles/globals.module.scss'
const App = () => {
    return (
        <div className={cl.app}>
            <AppRouter />
        </div>
    )
}

export default App
