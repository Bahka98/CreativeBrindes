// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import { ProductProvider } from './context/ProductContext';
import ScrollTop from './components/utils/ScrollTop';

function App() {
  const headerHeight = 65;

  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <ScrollTop />
          <Header />
          <main className="flex-grow footerAnimation" style={{ backgroundColor: '#f9fafb', marginTop: `${headerHeight}px` }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;