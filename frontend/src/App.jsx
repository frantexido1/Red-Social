import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './paginas/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App