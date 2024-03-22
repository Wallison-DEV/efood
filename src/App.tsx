import { BrowserRouter } from 'react-router-dom'

import { EstiloGlobal } from './styles'
import Rotas from './routes'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>
            <EstiloGlobal />
            <Rotas />
            <Footer />
        </BrowserRouter>
    )
}

export default App
