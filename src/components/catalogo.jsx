import Box from './../libs/box'
import { Link } from "react-router-dom";

const Catalogo=()=>{
    return(
    <>
       <Box text='Línea Catalogo'></Box>
       <Box text='Línea Monarca'></Box>        
       <section className="grid grid-cols-3 gap-1 text-[2vw] w-[70vw]">
        <div className=" relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Sillar/Portada-Sillar.png" alt="" loading="lazy" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 " ><Link to='/sillar'>SILLAR</Link> </span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Cubierta/Portada.png " alt="" loading="lazy"  className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/ovalines'>OVALINES</Link></span>
        </div>
        <div className="row-start-1 col-start-2 col-span-2 relative flex p-[1vw] items-center justify-center">
            <img src="./assets/Tabique_Aparente/Portada.png" loading="lazy"  className="w-[40vw]" alt="" />
            <span className="flex absolute p-[1vw] bg-black/70 rounded-xl "><Link to='/tabique_aparente'>TABIQUE APARENTE</Link></span>
        </div>
        <div className=" relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Muros_llorones/Portada.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/muro_lloron'>MUROS LLORONES</Link></span>
        </div>
        <div className=" row-start-1  col-start-1 relative flex items-center p-[1vw] justify-center">
            <img src="./assets/Fuentes/Portada.png" alt="" loading="lazy"  className="w-[20vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/60 " ><Link to='/fuentes'>FUENTES</Link></span>
        </div>
        <div className="row-start-5 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Tejas/TEJA-RECTA.webp" alt="" loading="lazy"  className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/Teja_individual'>Tejas individuales</Link></span>
        </div>
        <div className="row-start-4 col-start-1 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/pegadores/Pegapiedra.webp" loading="lazy"  alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/adhesivos'>PEGA PIEDRA</Link></span>
        </div>
        <div className="row-start-2 col-start-1 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Cantera/Portada.jpg" alt="" loading="lazy"  className="w-[50vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/cantera'>CANTERA</Link></span>
        </div>
        <div className="row-start-3 col-start-1 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Fachaletas/Portada.png" loading="lazy"   alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/fachaleta'>FACHALETAS</Link></span>
        </div>
        <div className="  relative flex items-center justify-center p-[1vw]" >
            <img src="./assets/Piedra_Bola_Marmol/Portada.jpg" loading="lazy"  alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70 "><Link to='/piedra_bola_marmol'>PIEDRA BOLA<br></br> MARMOL</Link></span>
        </div>
        <div className="relative flex items-center justify-center w-[26vw] p-[1vw]">
            <img src="./assets/PiedraLaja/Portada.png" alt="" loading="lazy"  className="md:h-[50vh] h-[20vh] w-[50vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl   bg-black/70 "><Link to="/piedra_laja_irregular">PIEDRA LAJA <br></br> IRREGULAR</Link></span>
        </div>
        <div className="col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Celosías/Portada.png" alt="" loading="lazy"  className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to="/celosías">CELOSÍAS</Link></span>
        </div>
        <div className=" row-start-5  col-start-1 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Tejas/Portada.jpg" alt="" loading="lazy"  className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to="/tejas">TEJAS</Link></span>
        </div>
        <div className="row-start-3 col-start-2 row-span-2 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="./assets/Fabricaciones/Portada.png" alt="" loading="lazy"  className="w-[42vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 "><Link to='/piezas_especiales'>FABRICACION DE PIEZAS ESPECIALES</Link></span>
        </div>
       </section> 
       <div className="w-[25vw] h-[12vh] bg-blue-950 rounded-[3vw] flex justify-center items-center m-1">
            <h2 className=" md:text-[2.5vw] text-[4vw]">Línea Pro<span className='text-[#f00]'>c</span>ova</h2>
        </div>       <section  className="grid grid-cols-3 gap-[2vw] text-[2vw] w-[70vw]">
        <div className=" flex flex-col items-center justify-center p-[1vw]  rounded-xl">
            <img src="./assets/procova/Block_hueco/Block_hueco.png" loading="lazy"  alt=""className="w-[30vw]" />
            <span className='flex  p-[1vw] text-[#000]'>Block hueco</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/Block_ligero.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Block ligero</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/block_solido.png" alt="" loading="lazy" className="w-[30vw]" />
            <span className='flex p-[1vw] text-[#000]'>Block solido</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/tabicón.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Tabicón</span>
        </div>
        <div className="flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/block_cara_de_piedra.png" loading="lazy"  alt="" className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Block decorativo</span>
        </div>
        <div className="flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/adoquines_bicapa.png" loading="lazy"  alt="" className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Adoquines bicapa</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/Casetón.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Casetón</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/bovedilla.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Bovedilla</span>
        </div>
        <div className=" flex flex-col items-center justify-center p-[1vw]   rounded-xl">
            <img src="./assets/procova/moldura.png" alt="" loading="lazy"  className="w-[30vw]"/>
            <span className='flex  p-[1vw] text-[#000]'>Molduras</span>
        </div>

       </section>

        </>
    );
}
export default Catalogo;