
module.exports = app => {
    app.get('/atendimentos',  (req, res) => {
        res.send('você está na rota de atendimentos e está realizando um get');
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send('você está na rota de atendimentos e está realizando um post');
    });
}