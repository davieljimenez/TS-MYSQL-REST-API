import {Router} from "express"
const router = Router();

import {getPosts, createPost, getOnePost} from "../controllers/post.controller"

router.route("/")
    .get(getPosts)
    .post(createPost);



router.route("/:postId")
    .get(getOnePost)

export default router