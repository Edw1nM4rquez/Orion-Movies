import './App.css';
import FooterC from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
       <Navbar/>
     <Routes>
      
     </Routes>
      <FooterC></FooterC>
      </Router>
    </>
  );
}

export default App;
