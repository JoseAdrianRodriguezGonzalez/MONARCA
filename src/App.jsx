//import { useState } from 'react'
import "./components/Header"
import './App.css'
import { useEffect,useState, } from 'react';
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carrousel from "./components/carrousel";
import "./components/catalogo";
import Catalogo from "./components/catalogo";
import Promo from "./components/aditional";
import Footer from "./components/footer";
import Box from "./libs/box";
import Comments from "./components/comments";
import Sucursales from "./components/sucursales";
import { Routes,Route, useLocation  } from "react-router-dom";
import Nosotros from "./pages/Nosotros"
import Sillar from './models/sillar';
const slides=[
  "/src/assets/Fachaletas-6.jpg",
  "/src/assets/full_Teja_Tipo_S_Terracota.jpg",
  "/src/assets/image.png"
]
const commentsValues = [
  { nombre: "Juan Pablo", lugar: 'Salamanca', descripcion: "Excelentes productos de calidad y fidelidad" },
  { nombre: "Ignacio Razo", lugar: 'Valle de Santiago', descripcion: "Sin lugar a dudas, volvería a comprar productos Monarca" },
  { nombre: "Pedro Martinez", lugar: 'Celaya', descripcion: "He cumplido mi sueño de hohar y ahora puedo dejar a mis hijos un mejor lugar para vivir" },
];



function App() {
  const location = useLocation();
 const [count, setCount] = useState(0);
 const  [array,setArray] =useState([]);
 
 useEffect(() => {
  
  AOS.init({
  duration: 1000, // Global animation duration
  });
  }, []);
  return (<>
  <div className="flex flex-col min-h-screen">
    <div className='container h-[24vh] relative z-10'>
    <Header></Header>
    </div>
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<main className="container grid relative  items-center content-center gap-2" >
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
        <div className="container grid grid-flow-col  ">
        <Comments  nombre={commentsValues[0].nombre} lugar={commentsValues[0].lugar} descripcion={commentsValues[0].descripcion} >
        </Comments>
        <Comments  nombre={commentsValues[1].nombre} lugar={commentsValues[1].lugar} descripcion={commentsValues[1].descripcion} >
        </Comments>
        <Comments  nombre={commentsValues[2].nombre} lugar={commentsValues[2].lugar} descripcion={commentsValues[2].descripcion} >
        </Comments>
        </div>
        <div className="container grid justify-center place-items-center mt-[10vw] mb-[10vw] gap-[5vw]">
          <Box text={'Sucursales'}></Box>
          <Sucursales></Sucursales>
        </div>
      </main>}></Route>
        <Route path="hola" element={<Nosotros></Nosotros>}></Route>
        <Route path="sillar" element={<Sillar></Sillar>}></Route>
      </Routes>
    
    </div>
     <div className="container"><Footer></Footer></div>
     </div>
      </>
  )
}

export default App
