import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage/ApartmentDetailsPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'


function App() {

  return (
    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/apartamentos/:apartment_id' element={<ApartmentDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </div>

      <Footer />
    </div>
  )
}

export default App