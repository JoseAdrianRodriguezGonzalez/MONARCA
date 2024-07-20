import express from 'express';
import cors from 'cors';
const app=express();
const corsOption={
    origin:["http://localhost:5173"],
}
app.use(cors(corsOption));
app.get("/",(req,res)=>{
    res.json({fruits:["apple","oragne","pineapple"]});
});
app.listen(8080,()=>{
    console.log("Server conecct on 8080");
});