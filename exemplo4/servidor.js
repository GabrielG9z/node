
import http from 'http';  //Importando módulo HTTP nativo do Node, (existe apartir da instalação do node na máquina). Pegar as requisições de URL.

import fs from 'fs/promises'; // JS Assíncrono (operações independentes, ocorrem em paralelo). FS = File System.

// require e response, parâmetros obrigatórios
const monitorRequisicao = (requisicao, resposta) => { //Arrow Function
    resposta.writeHead(200, {"Content-Type":"text/html; charset=utf8"} );

    switch(requisicao.url) {
            case '/':
            fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo) );
            break;

            case '/sobre':
                fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
            break;

            default:
                resposta.writeHead(404);
                fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
            break;
    }
}
  /* Criando um servidor baseado no módulo HTTP que importamos e monitorando ele */

const servidor = http.createServer(monitorRequisicao);

//iniciando o servidor

servidor.listen(8080, ()=>{
    console.log("Servidor ta jóia...");
});