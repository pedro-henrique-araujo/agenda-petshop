let conexao = require('../infra/conexao');

class Atendimento {
    adiciona(atendimento) {
        let sql = "INSERT INTO atendimentos SET ?";

        conexao.query(sql, atendimento, (err, result) => {
            if (err) return console.log(err);
            console.log(result);

        });
    }
}

module.exports = new Atendimento();