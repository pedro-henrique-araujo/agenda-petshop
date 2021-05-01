let moment = require('moment');
let conexao = require('../infra/conexao');

class Atendimento {
    adiciona(atendimento, res) {
        let dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        let data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

        let dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        let clienteEhValido = atendimento.cliente.length > 4;

        let validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ];

        let erros = validacoes.filter(validacao => validacao.valido == false);
        let existemErros = erros.length > 0 ; 

        if (existemErros) {
            res.status(400).json(erros);
            return;
        }

        let atendimentoDatado = {...atendimento, dataCriacao, data };
        let sql = "INSERT INTO atendimentos SET ?";

        conexao.query(sql, atendimentoDatado, (err, result) => {
            if (err) return res.status(400).json(err);
            res.status(201).json(result);

        });
    }
}

module.exports = new Atendimento();