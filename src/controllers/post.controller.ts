import {Request, Response} from "express"
import{connect} from "../database" 

import { Post } from '../interface/Post.interface';
// Listar
export  async function getPosts (req:Request, res:Response): Promise<Response>{
    const conn = await connect();
    const post = await conn.query("SELECT * FROM posts")
    return res.json(post[0])
}

// Crear 
 export async function createPost(req:Request, res:Response){
     const newPost:Post = req.body;
     const conn = await connect();
     await conn.query("INSERT INTO posts SET ?", [newPost])
     return res.json({
         message: "Post created"
     })
 }

//  Obtener una:

export async function getOnePost(req: Request, res:Response):Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts WHERE id = ?",[id]);
    return res.json(posts[0])
}