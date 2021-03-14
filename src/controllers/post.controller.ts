import {Request, Response} from "express"
import{connect} from "../database" 
// Listar
export  async function getPosts (req:Request, res:Response): Promise<Response>{
    const conn = await connect();
    const post = await conn.query("SELECT * FROM posts")
    return res.json(post[0])
}