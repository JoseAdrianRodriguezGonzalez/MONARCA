//import { useState } from 'react'
import "./components/Header"
import './App.css'
import { useEffect,useState } from 'react';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios"
import Carrousel from "./components/carrousel";
import "./components/catalogo";
import Catalogo from "./components/catalogo";
import Promo from "./components/aditional";
import Footer from "./components/footer";
const slides=[
  "/src/assets/Fachaletas-6.jpg",
  "/src/assets/full_Teja_Tipo_S_Terracota.jpg",
  "/src/assets/image.png"
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
    <div className='container h-[24vh] relative z-10'>
      <Header>
      </Header>
    </div>
    <main className="container grid relative  items-center content-center gap-2" >
        <div className="flex items-center justify-self-center lg:w-[50vw] ">
          <Carrousel autoslide={true} autoslideInterval={2000} > 
            {slides.map((s)=>(
              <img loading="lazy" src={s} className="md:object-content  lg:w-[100vw]" />
            ))}
          </Carrousel>
        </div>
        <div className="">
          <Promo></Promo>
        </div>
        <div className="grid justify-items-center gap-1">
            <Catalogo>

            </Catalogo>

        </div>
      </main>
     <div className="container"><Footer></Footer></div>
     
      </>
  )
}

export default App
