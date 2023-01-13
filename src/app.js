import express from "express";
import mongoDBConnect from "./config/mongoDBConnect.js";
import livros from './models/Livro.js';

const app = express();

app.use(express.json())
mongoDBConnect.connect();

app.get('/', (req, res) => {
    res.status(200).send('Curso de node');
});

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });
});

app.get('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    res.status(livro ? 200 : 404).send(livro || 'Not Found');
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado');
});

app.put('/livros/:id', (req, res) => {
    const livroIndex = livros.findIndex(l => l.id == req.params.id);

    if (livroIndex !== -1) {
        livros[livroIndex].titulo = req.body.titulo;
    }

    res.status(livros[livroIndex] ? 200 : 404).send(livros[livroIndex] || 'Not Found');
});

app.delete('/livros/:id', (req, res) => {
    const livroIndex = livros.findIndex(l => l.id == req.params.id);

    res.status(livros[livroIndex] ? 200 : 404).send((livros[livroIndex] && livros.splice(livroIndex)) || 'Not Found')
});

export default app;