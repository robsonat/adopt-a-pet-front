import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso NodjsioasjdliasiodasdeJS",
    "/pets": "Entrei na ropda PETS",
    "/adoptions": "Entrei na roda ADOPTIONS",
    "/adopters": "AdoTANTES"

}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"} );
    res.end(rotas[req.url])
  });
  ;

server.listen(PORT, () => {
    console.log(`Servidor online!`)
});