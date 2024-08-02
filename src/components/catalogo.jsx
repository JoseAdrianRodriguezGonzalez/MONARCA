const Catalogo=()=>{
    return(
        <>
       <div className="w-[30vw] h-[12vh] bg-black rounded-lg flex justify-center items-center m-1">
            <h1 className=" md:text-[3.5vw] text-[5vw]">Catalogo</h1>

       </div>
       <div className="w-[30vw] h-[12vh] bg-black rounded-lg flex justify-center items-center m-1">
           <h2 className=" md:text-[2.5vw] text-[4vw]">Linea Monarca</h2>
       </div>
       <section className="grid grid-cols-4">
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Sillar/Portada-Sillar.png" alt="" />
            <span className="flex absolute">SILLAR</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Cubierta/Portada.png" alt="" />
            <span className="flex absolute">OVALINES</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Tabique_Aparente/Portada.png" alt="" />
            <span className="flex absolute">TABIQUE APARENTE</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Muros_llorones/Portada.png" alt="" />
            <span className="flex absolute">MUROS LLORONES</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Fuentes/Portada.png" alt="" />
            <span className="flex absolute">FUENTES</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/pegadores/Portada.png" alt="" />
            <span className="flex absolute">ADHESIVOS</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/pegadores/Pegapiedra.png" alt="" />
            <span className="flex absolute">PEGA PIEDRA</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Cantera/Portada.jpg" alt="" />
            <span className="flex absolute">CANTERA</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Fachaletas/Portada.png" alt="" />
            <span className="flex absolute">FACHALETAS</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Piedra_Bola_Marmol/Portada.jpg" alt="" />
            <span className="flex absolute">PIEDRA BOLA MARMOL</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/PiedraLaja/Portada.png" alt="" />
            <span className="flex absolute">PIEDRA LAJA IRREGULAR</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Celosías/Portada.png" alt="" />
            <span className="flex absolute">CELOSÍAS</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Tejas/Portada.jpg" alt="" />
            <span className="flex absolute">TEJAS</span>
        </div>
        <div className="relative flex items-center justify-center">
            <img src="/src/assets/Fabricaciones/Portada.png" alt="" />
            <span className="flex absolute">FABRICACION DE PIEZAS ESPECIALES</span>
        </div>
       </section>
        </>
    );
}
export default Catalogo;