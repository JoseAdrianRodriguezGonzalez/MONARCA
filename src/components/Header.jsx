import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    // Inicializar AOS
    AOS.init();
  }, []);

  useEffect(() => {
    // Actualizar AOS si el menú cambia
    if (isMenuVisible) {
      AOS.refresh();
    }
  }, [isMenuVisible]);

  const handleToggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  return (
    <div className="container bg-black flex flex-row">
      <nav className="container flex flex-row">
        <div className="container w-1/2 flex flex-row items-center">
          <img className="h-[12vh] w-[30vw] md:h-[25vh] md:w-[20vw]" loading="lazy" src="/src/assets/MONARCA_BLANCA - copia.png" alt="" />
          <img className="h-[8vh] w-[40vw] md:h-[8vh] md:w-[30vw]" loading="lazy"src="/src/assets/MONARCA_BLANCA - copia (2).png" alt="" />
        </div>
        <div className="container md:flex md:flex-col-reverse md:w-1/2 md:visible hidden">
          <ul className="container md:flex md:flex-row-reverse md:w-[50vw] md:visible hidden">
            <li className="pl-[1.8vw] pb-[0.3vw] pr-[1.8vw] text-[1.8vw]">Nosotros</li>
            <li className="pl-[1.8vw] pb-[0.3vw] pr-[1.8vw] text-[1.8vw]">Catálogo</li>
            <li className="pl-[1.8vw] pb-[0.3vw] pr-[1.8vw] text-[1.8vw]">Servicios</li>
            <li className="pl-[1.8vw] pb-[0.3vw] pr-[1.8vw] text-[1.8vw]">Inicio</li>
          </ul>
        </div>
        <div className="md:hidden container flex w-[50vw] items-center justify-end relative">
          <FontAwesomeIcon name="menu" icon={faBars} className="md:hidden w-[40vw] text-[10vw]" onClick={handleToggleMenu} />
          <div
            className={`container absolute bottom-[-47vw] right-[0vw] bg-black w-[30vw]  justify-items-center ${isMenuVisible ? 'block' : 'hidden'}`}
            data-aos={isMenuVisible ? 'fade-down' : 'fade-up'}  // Aquí agregamos el atributo data-aos
            data-aos-duration="1000" // Duración opcional para la animación
          >
            <ul className="container flex flex-col-reverse md:w-[100vw]">
              <li className="p-[3vw] text-[4vw]">Nosotros</li>
              <li className="p-[3vw] text-[4vw]">Catálogo</li>
              <li className="p-[3vw] text-[4vw]">Servicios</li>
              <li className="p-[3vw] text-[4vw]">Inicio</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
