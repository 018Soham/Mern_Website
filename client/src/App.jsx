import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Servise from './pages/Servise';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { Logout } from './pages/Logout';
import { AuthProvider } from './store/auth';  // Import AuthProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> {/* Wrap with AuthProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servise" element={<Servise />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
