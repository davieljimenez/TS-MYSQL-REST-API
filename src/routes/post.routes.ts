import {Router} from "express"
const router = Router();

import {getPosts, createPost, getOnePost, deletePost, updatePost} from "../controllers/post.controller"

router.route("/")
    .get(getPosts)
    .post(createPost);



router.route("/:postId")
    .get(getOnePost)
    .delete(deletePost)
    .put(updatePost)

export default router