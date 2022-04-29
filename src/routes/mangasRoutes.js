import express from "express";
import MangaController from "../controllers/mangasController.js";

const router = express.Router(); // Roteamento

router
    .get('/mangas', MangaController.listarMangas)
    .get('/mangas/busca', MangaController.encontrarMangaPorEditora)
    .get('/mangas/:id', MangaController.encontrarMangaPorID)
    .post('/mangas', MangaController.cadastrarManga)
    .put('/mangas/:id', MangaController.atualizarManga)
    .delete('/mangas/:id', MangaController.excluirManga)

export default router;