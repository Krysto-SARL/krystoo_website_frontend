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
import Login from './pages/login/Login'
import Private from './pages/private/Private'
import Partners from './pages/partners/Partners'
import Error404 from './pages/error404/Error404'
import PrivateMyProfil from './pages/private/privateMyProfil/PrivateMyProfil'
import RecyclableProducts from './pages/recyclableProducts/RecyclableProducts'
import RecyclableProduct from './pages/recyclableProduct/RecyclableProduct'

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
          <Route path="/nos-partenaires" element={<Partners />} />
          <Route path="/recyclage-et-santé" element={<RecyclableProducts />} />
          <Route
            path="/produit-recyclable/:id"
            element={<RecyclableProduct />}
          />
          <Route path="/espace-client" element={<Login />} />
          <Route path="*" element={<Error404 />} />

          <Route path="/private" element={<Private />}>
            <Route path="/private/mon-profile" element={<PrivateMyProfil />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
