import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/home/Home'
import ScrollToTop from './components/ScrollToTop.'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
