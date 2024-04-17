import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './styles'
import Rotas from './routes'
import Footer from './Components/Footer'
import { store } from './store'
import Cart from './Components/Cart'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <EstiloGlobal />
                <Rotas />
                <Footer />
                <Cart/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
