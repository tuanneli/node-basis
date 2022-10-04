import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from "./route.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = `mongodb+srv://admin:admin@cluster0.l2lub9k.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function start() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();

