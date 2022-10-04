import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            res.status(200).json(posts);
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.status(200).json(post);
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            await PostService.delete(req.params.id);
            return res.status(200).json(`Post ${req.params.id} was deleted`);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new PostController;