import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import Home from './components/Home'
import Navbar from './components/Navbar'
import CandidateRegistration from './components/CandidateRegistration'
import CandidateList from './components/CandidateList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate/registration' element={<CandidateRegistration />} />
        <Route path='/candidate/list' element={<CandidateList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
