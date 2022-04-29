import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router(); // Roteamento

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.encontrarAutorPorID)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router;