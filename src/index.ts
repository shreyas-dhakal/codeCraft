import express from "express";
import mongoose, { mongo } from "mongoose";
import router from "./routes";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://localhost:27017/";
mongoose.connect(MONGO_URL, {
    dbName: "codecraft",
})
    .then(()=>{
        console.log("database connected");
})
    .catch((error) => console.log(error)
);
app.use('/', router);
app.listen(4000, ()=>{
    console.log("server running on http://localhost:4000");
})