
import Box from "../libs/box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree,faHouse,faHammer } from "@fortawesome/free-solid-svg-icons"; 
const Nosotros =()=>{
    return(
    <>

        <main className="grid grid-flow-row items-center md:p-[2vw] mt-[-10vw]" >
            <div className="flex justify-center">
                <Box text={'Nosotros'}></Box>
            </div>
        <section className="text-black text-[2vw] grid grid-cols-1 md:grid-cols-3 gap-[2vw] p-[2vw]">
            <div className="flex flex-col bg-black/70 p-[2vw] rounded-2xl">
                <FontAwesomeIcon icon={faTree} className="text-[7vw] text-white"></FontAwesomeIcon> 
                <div className="md:text-[1.4vw] text-[4vw] md:p-[1vw] p-[2vw]  text-white">
                Nos dedicamos a construir sueños que se integran armoniosamente con la naturaleza. Nuestra pasión por la construcción va más allá de crear estructuras; nos esforzamos por diseñar espacios que reflejen belleza, sostenibilidad y confort.
                </div>
            </div>

            <div className="flex flex-col  bg-black/70 p-[2vw] rounded-2xl">
                <FontAwesomeIcon icon={faHouse} className="text-[7vw] text-white"></FontAwesomeIcon>
                <div className="md:text-[1.4vw] text-[4vw] md:p-[1vw] p-[2vw] text-white">
                    Utilizamos materiales amigables con el medio ambiente, cuidadosamente seleccionados para minimizar el impacto ecológico y garantizar la durabilidad y calidad de nuestras obras. Creemos firmemente que cada proyecto debe ser un reflejo de nuestra responsabilidad con el entorno y un compromiso con las futuras generaciones.
                </div>
            </div>


            <div className="flex flex-col  bg-black/70 p-[2vw] rounded-2xl">
                <FontAwesomeIcon icon={faHammer} className="text-[7vw] text-white"></FontAwesomeIcon>
                <div className="md:text-[1.4vw] text-[4vw]  p-[2vw] md:p-[1vw] text-white">
                    Transformamos tus ideas en realidad con soluciones personalizadas. Nos especializamos en crear lo que necesitas, garantizando calidad y un acabado impecable. Tu visión, nuestra ejecución.
                </div>
            </div>


        </section>
        </main>
    </>   
    );
}
export default Nosotros;