import express, {Application}from "express";



export class App{

 private app:Application

    constructor(){
        this.app = express()
    }
    async listen(){
       await this.app.listen(8000);
       console.log(`Server on port 8000`);
    }
}