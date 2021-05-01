let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');


module.exports = () => {
    
    let app = express();
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));    

    consign().include('controllers').into(app);
    return app;

}