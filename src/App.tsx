import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './styles'
import Footer from './Components/Footer'

import Rotas from './routes'
import { store } from './store'
import Sidebar from './Components/Sidebar'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <EstiloGlobal />
                <Rotas />
                <Footer />
                <Sidebar />
            </BrowserRouter>
        </Provider>
    )
}

export default App
