import Box from './../libs/box'
const Catalogo=()=>{
    return(
    <>
       <Box text='Línea Catalogo'></Box>
       <Box text='Línea Monarca'></Box>        
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
       <Box text='Línea Procova'></Box>
       <section  className="grid grid-cols-3 gap-1 text-[2vw] w-[70vw]">
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/Block_hueco/Block_hueco.png" alt=""className="w-[30vw]" />
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Block hueco</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/Block_ligero.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Block ligero</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/block_solido.png" alt=""className="w-[30vw]" />
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Block solido</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/tabicón.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Tabicón</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/block_cara_de_piedra.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Block decorativo</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/adoquines_bicapa.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Adoquines bicapa</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/Casetón.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Casetón</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/bovedilla.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Bovedilla</span>
        </div>
        <div className="relative flex items-center justify-center p-[1vw]">
            <img src="./src/assets/procova/moldura.png" alt="" className="w-[30vw]"/>
            <span className='flex absolute p-[1vw] bg-black  rounded-xl  bg-black/70'>Molduras</span>
        </div>

       </section>
        </>
    );
}
export default Catalogo;