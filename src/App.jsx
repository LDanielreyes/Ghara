import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AfiliadosPage from './pages/AfiliadosPage';
import CatalogoPage from './pages/CatalogoPage';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/afiliados" element={<AfiliadosPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
