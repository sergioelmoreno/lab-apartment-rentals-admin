import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Navbar title={"Apartments Rental Admin"} />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
