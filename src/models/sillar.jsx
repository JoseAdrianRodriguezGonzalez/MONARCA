import React, { useEffect, useState } from 'react';
const Sillar=()=>{
    const [data, setData] = useState([]);//oBTENER DATOS DE EXPRESS

    useEffect(() => {//PETICION
      // Consumir la API
      fetch('http://localhost:3001/sillar')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log('Error fetching data xdxdd:', error));
    }, []);
    return (//COLOCAR DATOS
        <div>
          <h1>Datos de Sillar</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.COLOR}</li>
            ))}
          </ul>
        </div>
      );
    
}
export default Sillar;