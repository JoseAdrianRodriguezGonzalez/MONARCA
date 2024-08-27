import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../libs/box';
const Sillar=()=>{
  const {productName}=useParams();
    const [data, setData] = useState([]);//oBTENER DATOS DE EXPRESS

    useEffect(() => {//PETICION
      // Consumir la API

      fetch(`http://localhost:3001/${productName}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log('Error fetching data xdxdd:', error));
        
    }, [productName]);
    console.log(data)
    return (//COLOCAR DATOS
      <>
      <div className='container grid justify-center self-center'>
        <Box text={productName.replace('_',' ')}></Box>
      </div>
        <div >
          <ul className='container grid grid-cols-3  gap-[1.2vw]'>
            {data.map((item, index) => (
              <div className="container p-[1vw] bg-black flex flex-col rounded-lg" key={index}>
                <img src={item.IMG} alt="" loading='lazy'/>
                <li className='container flex justify-center p-[0.5vw] text-[2.3vw] ' >{item.NOMBRE}</li>
                
              </div>
            ))}
          </ul>
        </div>
        </>
      );
    
}
export default Sillar;