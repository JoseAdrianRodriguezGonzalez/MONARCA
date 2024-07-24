//import { useState } from 'react'
import "./components/Header"
import './App.css'
import { useEffect,useState } from 'react';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
import Carrousel from "./components/carrousel";
const slides=[
  "/src/assets/Fachaletas-6.jpg",
  "/src/assets/full_Teja_Tipo_S_Terracota.jpg",
  "/src/assets/image_processing20201110-4-18n6g9t.jpg",
]
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
  return (<>
    <div className='container h-[13vh] relative z-10'>
      <Header>
      </Header>
    </div>
    <main className="container grid relative justify-center items-center content-center" >
        <div className="flex items-center justify-center w-[60vw] ">
          <Carrousel autoslide={true} autoslideInterval={2000}>
            {slides.map((s)=>(
              <img src={s} />
            ))}
          </Carrousel>
        </div>
      </main></>
  )
}

export default App
