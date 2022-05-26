import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CardsRouter from './routers/CardsRouter';

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 5000)
  }, [])

  return (
    <>
      <Navbar/>
      {
        loaded ?
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="cards/*" element={<CardsRouter />} />
        </Routes>
        :
        <p>Loading, please wait...</p>
      }
    </>
  );
}

export default App;
