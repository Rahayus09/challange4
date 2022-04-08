import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hasil from './pages/Hasil/Hasil';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Hasil />} />
        <Route path="/detail" element={<Detail />} />
    </Routes>
    </BrowserRouter>
    
    
  ); 
}

export default App;