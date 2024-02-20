import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './paginas/Login';
import Register from './paginas/Register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App