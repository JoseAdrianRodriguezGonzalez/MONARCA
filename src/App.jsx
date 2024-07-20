//import { useState } from 'react'
import "./components/Header"
import './App.css'
import { useEffect,useState } from 'react';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
function App() {
 const [count, setCount] = useState(0);
 const  [array,setArray] =useState([]);
 const fetchAPI=async()=>{
  const response=await axios.get("http://localhost:8080");
  console.log(response.data.fruits);
 }
 useEffect(()=>{
  fetchAPI();
 },[]);
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
