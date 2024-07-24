import './App.css'
import ApartmentList from './components/ApartmentList/ApartmentList.jsx'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Sidebar />
        <ApartmentList />
      </main>

      <Footer />
    </div>
  )
}

export default App