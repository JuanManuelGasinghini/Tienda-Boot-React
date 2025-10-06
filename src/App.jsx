import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Footer from './Components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
