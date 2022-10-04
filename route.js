import express, {Router} from "express";
import PostController from "./PostController.js";
import postController from "./PostController.js";

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', PostController.update);
router.delete('/posts/:id', postController.delete);

export default router;