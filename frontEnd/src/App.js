// App.js
import './App.css';
import { useState } from "react";
import Home from './Components/Home';
import RecipesContextProvider from './context/RecipesContext';
import About from './Components/About';
import Contact from './Components/Contact';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodDisplay from './Components/FoodDisplay/FoodDisplay'; // Import the FoodDisplay component
import FoodDetail from './Components/FoodDetail/FoodDetail'; // Import the FoodDetail component
import UserProfile from './Components/UserProfile/UserProfile';
import Footer from './Components/Footer/Footer';
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="App">
        <RecipesContextProvider>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<FoodDisplay />} /> {/* FoodDisplay componentini ekleyin */}
            <Route path="/recipes/:id" element={<FoodDetail />} /> {/* FoodDetail componentini ekleyin */}
            <Route path="/profile" element={<UserProfile />} /> {/* Add UserProfile route */}
          </Routes>
        </RecipesContextProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
