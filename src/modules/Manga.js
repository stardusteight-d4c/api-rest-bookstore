import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        publicacao: {type: Number}
    }
);

const mangas = mongoose.model('mangas', mangaSchema);

export default mangas;