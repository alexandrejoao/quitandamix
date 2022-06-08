const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/client'));


app.listen(port, () => {
        console.info(`\nAplicação Rodando em http://localhost:4000\n`);
});

