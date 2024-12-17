import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
const Footer=()=>{
    return(
        <div className="container bg-black flex flex-row items-center flex-auto">
            <div className="w-1/2 grid ">
                <img src="./assets/MONARCA_BLANCA.png" className="w-[40vw]" alt="" />
                <div className="h-[10vh] grid grid-flow-col justify-center gap-[10vw] items-start">
                    <a href="https://www.facebook.com/procova.com.mx" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-[3vw]" />
                    </a>    
                    <a href="https://wa.me/524561231493" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-[3vw]" />
                    </a>
                </div>
            </div>
            <div className="container w-1/2 grid justify-center items-center text-[2vw] ">
                <span className="w-[10vw]">
                    Contacto
                </span>
            </div>
        </div>
    )
}
export default Footer