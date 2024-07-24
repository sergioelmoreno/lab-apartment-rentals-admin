import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App