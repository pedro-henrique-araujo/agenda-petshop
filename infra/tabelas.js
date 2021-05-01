class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
        console.log('Tabelas foram chamadas');
    }

    criarAtendimentos() {
        let sql = `
            CREATE TABLE IF NOT EXISTS atendimentos (
                id INT NOT NULL AUTO_INCREMENT,
                cliente VARCHAR(50) NOT NULL,
                pet VARCHAR(20),
                servico VARCHAR(20) NOT NULL,
                status VARCHAR(20) NOT NULL,
                observacoes TEXT,
                PRIMARY KEY (id)
            );
        `;
        this.conexao.query(sql, err => {
            if (err) return console.log(err);
            console.log("Tabela atendimentos criada com sucesso")
        });
    }
}

module.exports = new Tabelas();