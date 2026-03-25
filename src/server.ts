
import { Request, Response } from "express";
import app from "./app";
// import { envVars } from "./config/env";



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

const bootStrap = () =>{
    try{
        app.listen(5000, ()=>{
            console.log(`server is running  on http://localhost:${5000}`);
        })
        
    }catch(error){
        console.log("Failed to start server:", error);
    }
}

bootStrap()