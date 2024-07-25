import './App.css'
import ApartmentsListPage from './pages/ApartmentsListPage/ApartmentsListPage.jsx'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage/ApartmentDetailsPage.jsx'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Sidebar />
        <Routes>
          <Route path='/' element={<ApartmentsListPage />} />
          <Route path='/apartment/:apartment_id' element={<ApartmentDetailsPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App