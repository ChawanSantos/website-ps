import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Vagas from '../pages/Vagas'
import Departamentos from '../pages/Departamentos'
import Treino from '../pages/Treino'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vagas' element={<Vagas />} />
            <Route path='/departamentos' element={<Departamentos />} />
            <Route path='/treino' element={<Treino />} />
        </Routes>
    )
}

export default RoutesApp
