import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
const Comments=({nombre,lugar,descripcion} )=>{
    return(
        <>
           <div className="grid bg-black text-white w-[30vw] p-4 rounded-lg m-2">
            <div className="flex items-center mb-2">
                <div className="mr-2 text-xl">
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <span className="block font-bold">{nombre}</span>
                    <span className="block text-sm">{lugar}</span>
                </div>
            </div>
            <div className="mt-2">
                {descripcion}
            </div>
        </div>
        </>
    )
};
export default Comments;