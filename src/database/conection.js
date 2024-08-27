//IMPORTAR LIBRERIS IMPORTANTES
import mysql from 'mysql'
import express from 'express';
import cors from 'cors';
const port = 3001;//PUERTO DE CONEXIÓN
const corsOption={
    origin:["http://localhost:5173"],
}//EL ORGIEN
const app=express(); //INICIAS EXPRESS
//CONECTAS LA BASE DE DATOS
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'monarca'
})
connection.connect()
//PERMITE LAS CONEXIÓN DE REACT
app.use(cors(corsOption))




//OBTIENES ESE VALOR
app.get('/:nombre?',(req,res)=>{
    //HACES UN QUERY SELECT
    const {nombre}=req.params;
    console.log('Product Name:', nombre);
    const query = `SELECT * FROM \`${nombre}\` WHERE 1`; 
    console.log('Query:', query);
connection.query(query, (err, rows) => {
    if (err) {
        console.error('Error en la base de datos:', err);
        res.status(500).send('Error en la base de datos');
        return;
      }

      res.json(rows);
    });
})//MONTAS EL SERVIDOR
app.listen(port,()=>{
    console.log(`Servidor Express corriendo en el puerto ${port}`);
})
