import express from "express";

const app = express();

const livros = [
    {
        id: '1',
        titulo: 'opa'
    },
    {
        id: '2',
        titulo: 'blz'
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Curso de node');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Dale pai');
});

export default app;