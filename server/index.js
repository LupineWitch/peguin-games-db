import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(7777, () => console.log("Server address http://localhost:7777"));

app.get('/games', (_req, res) => {
    fs.readFile('./games.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /games: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /games");
        res.send(productsJson);
    });
});

app.get('/publisher', (_req, res) => {
    fs.readFile('./publisher.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /publisher: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /publisher");
        res.send(productsJson);
    });
});

app.get('/distribution', (_req, res) => {
    fs.readFile('./distribution.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /distribution: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /distribution");
        res.send(productsJson);
    });
});