import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/frontend/NavBar/NavBar';
import Home from './components/frontend/Home/Home';
import About from './components/frontend/About/About';
import Category from './components/frontend/category/category';
import Toys from './components/frontend/Toys/Toys';
import Login from './components/frontend/Login/Login';
import Signup from './components/frontend/Login/signup/signup';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
