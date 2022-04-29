import mangas from "../modules/Manga.js";

class MangaController {
    static listarMangas = (req, res) => {
        mangas.find()
        .populate('autor')
        .exec((err, mangas) => {
            res.status(200).json(mangas);
        })
    } 
    static encontrarMangaPorID = (req, res) => {
        const id = req.params.id;
        mangas.findById(id)
        .populate('autor', 'nome')
        .exec((err, mangas) => {
            if(err) {
                res.status(400).send({message: `${err.message} - ID não encontrado`});
            } else {
                res.status(200).send(mangas);
            }
        })
    }
    static cadastrarManga = (req, res) => {
        let manga = new mangas(req.body);
        manga.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar manga`})
            } else {
                res.status(201).send(manga.toJSON())
            }
        })
    }
    static atualizarManga = (req, res) => {
        const id = req.params.id;
        mangas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Manga atualizado com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }
    static excluirManga = (req, res) => {
        const id = req.params.id;
        mangas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Manga deletado com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }
    static encontrarMangaPorEditora = (req, res) => {
        const editora = req.query.editora;
        mangas.find({'editora': editora}, {}, (err, mangas) => {
            if(!err) {
                res.status(200).send(mangas);
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default MangaController;