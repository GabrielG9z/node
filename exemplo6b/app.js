import express from "express";
const app = express();
app.set('view engine','ejs');

//~ configurando as rotas
app.get('/', (req,res) =>{
    // res.send('Olar Mundor.')
    let bandas = ['RPM','cbjr', 'skank'];
    res.render('index', {bandas});
})

app.get('/sobre', (req, res) => {
    res.render('sobre');
})

app.get('/contato', (req,res) => {
    res.render('contato');
})



/* Configurando o motor de visualização com EJS */
app.set('view engine', 'ejs');


/* ~configurando o servidor */


// arrow function cridada apenas para caso ocorra algum erro na iniciação do servidor.
app.listen(8080, () =>{
    console.log('Servidor Express funfando...');
})