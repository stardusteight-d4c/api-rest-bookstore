import mongoose from "mongoose";

mongoose.connect('mongodb+srv://stardusteight:vIftkrVb1ICSceeU@cluster0.itm6j.mongodb.net/alura-node?');
let db = mongoose.connection;

export default db;