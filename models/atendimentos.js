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
            res.status(201).json(atendimentoDatado);

        });
    }

    detalhe(id, res) {
        let sql = 'SELECT * FROM atendimentos WHERE id = ?';

        conexao.query(sql, id, (err, results) => {
            if (err) res.status(400).json(err);
            return res.json(results[0]);
        });
    }

    lista(res) {
        let sql = 'SELECT * FROM atendimentos';

        conexao.query(sql, (err, results) => {
            if (err) res.status(400).json(err);
            return res.json(results);
        });
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        let sql = 'UPDATE atendimentos SET ? WHERE id = ?';
        conexao.query(sql, [valores, id], (err, results) => {
            if (err) return res.status(400).json(err);
            return res.json({...valores, id});
        });
    }

    deletar(id, res) {
        let sql = 'DELETE FROM atendimentos WHERE id = ?';

        conexao.query(sql, id, (err, results) => {
            if (err) return res.status(400).json(err);
            return res.json({id});
        });
    }
}

module.exports = new Atendimento();