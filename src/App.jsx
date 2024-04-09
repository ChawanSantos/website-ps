import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/index'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  )
}

export default App
