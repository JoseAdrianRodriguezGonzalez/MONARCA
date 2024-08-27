import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        <div>
          <h1>Datos de {productName}</h1>
          <ul>
            {data.map((item, index) => (
              <li className='text-black' key={index}>{item.NOMBRE}</li>
            ))}
          </ul>
        </div>
      );
    
}
export default Sillar;