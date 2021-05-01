let customExpress = require("./config/customExpress");
let conexao = require('./infra/conexao');
let Tabelas = require('./infra/tabelas');

conexao.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Database successfully connected');
    Tabelas.init(conexao);
    let app = customExpress();
    
    app.listen(3000, () => console.log('servidor rodando na porta 3000'));
});


