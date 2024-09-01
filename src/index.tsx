import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        {/* <Provider> */}
            <App />
        {/* </Provider> */}
    </BrowserRouter>,
)
