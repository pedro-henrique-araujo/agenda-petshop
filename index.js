let express = require('express');

let app = express();

app.listen(3000, () => console.log('servidor rodando na porta 3000'));


app.get('/atendimentos',  (req, res) => {
    res.send('você está na rota de atendimentos e está realizando um get')
});