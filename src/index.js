import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from "./pages/Home/Home";
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import data from './assets/data.json'

export default function App() {
  return (
     <>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Destination' element={<Destination data={data.destinations}/>}/>
                <Route path='Crew' element={<Crew data={data.crew}/>}/>
                <Route path='Technology' element={<Technology data={data.technology}/>}/>
            </Routes>
        </BrowserRouter>
     </>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

