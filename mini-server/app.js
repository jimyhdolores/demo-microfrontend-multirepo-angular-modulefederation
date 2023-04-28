const http = require("http");
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    //set the request route

    console.log(req.url);
    if (req.method === 'GET' && req.url === '/api/manifest.json') {
        const filePath = path.join(__dirname, 'manifest.json');
        const data = fs.readFileSync(filePath);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(data);
      } else {
        res.statusCode = 404;
        res.end('Not Found');
      }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});