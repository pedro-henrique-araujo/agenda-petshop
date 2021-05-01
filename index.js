let customExpress = require("./config/customExpress");

let app = customExpress();

app.listen(3000, () => console.log('servidor rodando na porta 3000'));


