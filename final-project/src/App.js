import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

const App = () => {

    return (
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
