let Atendimento = require('../models/atendimentos');


module.exports = app => {
    app.get('/atendimentos',  (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        let id = req.params.id;
        Atendimento.detalhe(id, res);
    });

    app.post('/atendimentos', (req, res) => {
        let atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        let id = req.params.id;
        let valores = req.body;
        Atendimento.altera(id, valores, res); 
    });

    app.delete('/atendimentos/:id', (req, res) => {
        let id = req.params.id;
        Atendimento.deletar(id, res);
    });
} 