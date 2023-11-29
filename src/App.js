import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
