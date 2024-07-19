//import { useState } from 'react'
import "./components/Header"
import './App.css'
import { useEffect } from 'react';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
 // const [count, setCount] = useState(0)
 useEffect(() => {
  AOS.init({
  duration: 1000, // Global animation duration
  });
  }, []);
  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default App
