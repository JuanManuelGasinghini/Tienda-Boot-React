import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navBar/NavBarUno';
import Header from './Components/header/Header';
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <NavBar/>
        <Home />
        <ItemListContainer greeting={ "Muestra del componente compartiendo greeting" } />
        <Footer />
      </div>
    </>
  )
}

export default App
