"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getOnePost = exports.createPost = exports.getPosts = void 0;
const database_1 = require("../database");
// Listar
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const post = yield conn.query("SELECT * FROM posts");
        return res.json(post[0]);
    });
}
exports.getPosts = getPosts;
// Crear 
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield database_1.connect();
        yield conn.query("INSERT INTO posts SET ?", [newPost]);
        return res.json({
            message: "Post created"
        });
    });
}
exports.createPost = createPost;
//  Obtener una:
function getOnePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        const posts = yield conn.query("SELECT * FROM posts WHERE id = ?", [id]);
        return res.json(posts[0]);
    });
}
exports.getOnePost = getOnePost;
// ELiminar:
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        yield conn.query("DELETE FROM posts WHERE id = ?", [id]);
        return res.json({
            message: `Post id: ${id} deleted`
        });
    });
}
exports.deletePost = deletePost;
// Actualizar
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const conn = yield database_1.connect();
        yield conn.query("UPDATE posts set ? WHERE id = ?", [updatePost, id]);
        return res.json({
            message: "Post updated"
        });
    });
}
exports.updatePost = updatePost;
