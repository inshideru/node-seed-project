var express = require ('express');
const PORT = 3000;

const app = express();

app.set('json spaces', 4);

app.get('/', (req, res) => res.json({status: 'Node Project API'}));

app.get('/tasks', (req, res) => {
    res.json({
        tasks: [
            {title: 'Fazer compras'},
            {title: 'Consertar o pc'}
        ]
    })
})

app.listen(PORT, () => console.log(`Node Project API - porta ${PORT}`));