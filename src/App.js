import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/home/Home'
import ScrollToTop from './components/ScrollToTop.'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Product from './pages/product/Product.jsx'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import LegalNotice from './pages/legalNotice/LegalNotice'
import Service from './pages/service/Service'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nos-produits" element={<Products />} />
          <Route path="/produit/:id" element={<Product />} />
          <Route path="/Nos-services" element={<Services />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/A-propos" element={<About />} />
          <Route path="/Nous-contacter" element={<Contact />} />
          <Route path="/Mentions-légales" element={<LegalNotice />} />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
