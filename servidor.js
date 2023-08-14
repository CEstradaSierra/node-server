const {taskList,selectMenu} = require('./menu');
const http = require("http");

const port = 8000;

const requestListener = function (req, res) {
    const url = new URL(req.url, `http://localhost:${port}`);

    if (url.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Pagina de inicio</h1>");
    } else if (url.pathname === "/tasks") {
        let tareas = JSON.stringify(taskList);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(tareas);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Página no encontrada</h1>");
    }

    res.end();
}

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port);
});
