const Catalogo=()=>{
    return(
        <>
       <div className="w-[30vw] h-[12vh] bg-black rounded-lg flex justify-center items-center m-1">
            <h1 className=" md:text-[3.5vw] text-[5vw]">Catalogo</h1>

       </div>
       <div className="w-[30vw] h-[12vh] bg-black rounded-lg flex justify-center items-center m-1">
           <h2 className=" md:text-[2.5vw] text-[4vw]">Linea Monarca</h2>
       </div>
       <section className="grid grid-cols-3 gap-1 text-[2vw] w-[70vw]">
        <div className=" relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Sillar/Portada-Sillar.png" alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 " >SILLAR</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Cubierta/Portada.png " alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">OVALINES</span>
        </div>
        <div className="row-start-1 col-start-2 col-span-2 relative flex p-[1vw] items-center justify-center">
            <img src="/src/assets/Tabique_Aparente/Portada.png" className="w-[40vw]" alt="" />
            <span className="flex absolute p-[1vw] bg-black/70 rounded-xl ">TABIQUE APARENTE</span>
        </div>
        <div className=" relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Muros_llorones/Portada.png" alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">MUROS LLORONES</span>
        </div>
        <div className=" row-start-1  col-start-1 relative flex items-center p-[1vw] justify-center">
            <img src="/src/assets/Fuentes/Portada.png" alt="" className="w-[20vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/60 " >FUENTES</span>
        </div>
        <div className="row-start-5 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/pegadores/Portada.png" alt="" className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">ADHESIVOS</span>
        </div>
        <div className="row-start-4 col-start-1 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/pegadores/Pegapiedra.png" alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">PEGA PIEDRA</span>
        </div>
        <div className="row-start-2 col-start-1 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Cantera/Portada.jpg" alt="" className="w-[50vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">CANTERA</span>
        </div>
        <div className="row-start-3 col-start-1 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Fachaletas/Portada.png" alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">FACHALETAS</span>
        </div>
        <div className="  relative flex items-center justify-center p-[1vw]" >
            <img src="/src/assets/Piedra_Bola_Marmol/Portada.jpg" alt="" className="w-[30vw]"/>
            <span className="flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70 ">PIEDRA BOLA<br></br> MARMOL</span>
        </div>
        <div className="relative flex items-center justify-center w-[26vw] p-[1vw]">
            <img src="/src/assets/PiedraLaja/Portada.png" alt="" className="h-[50vh] w-[50vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl   bg-black/70 ">PIEDRA LAJA <br></br> IRREGULAR</span>
        </div>
        <div className="col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Celosías/Portada.png" alt="" className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">CELOSÍAS</span>
        </div>
        <div className=" row-start-5  col-start-1 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Tejas/Portada.jpg" alt="" className="w-[40vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">TEJAS</span>
        </div>
        <div className="row-start-3 col-start-2 row-span-2 col-span-2 relative flex items-center justify-center p-[1vw]">
            <img src="/src/assets/Fabricaciones/Portada.png" alt="" className="w-[42vw]"/>
            <span className="flex absolute p-[1vw] bg-black rounded-xl  bg-black/70 ">FABRICACION DE PIEZAS ESPECIALES</span>
        </div>
       </section>

        </>
    );
}
export default Catalogo;