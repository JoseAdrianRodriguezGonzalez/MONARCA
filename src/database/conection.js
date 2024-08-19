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
app.get('/sillar',(req,res)=>{
    //HACES UN QUERY SELECT
connection.query('SELECT * FROM `sillar` WHERE 1', (err, rows, fields) => {
    if (err) {
        res.status(500).send('Error en la base de datos');
        return;
      }
      res.json(rows);
    });
})//MONTAS EL SERVIDOR
app.listen(port,()=>{
    console.log(`Servidor Express corriendo en el puerto ${port}`);
})
