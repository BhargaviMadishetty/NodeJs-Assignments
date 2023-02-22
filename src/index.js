const http = require("http");
// const { url } = require("inspector");
// const { type } = require("os");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  //console.log(req.url);
  if (req.url == "/welcome") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      `phone: 18602100000, 
email: guestcaredominos@jublfood.com`
    );
    res.end();
  } else {
    res.writeHead(404, {});
    res.write(`Error 404.
The page you are looking for can't be found`);
    res.end();
  }
}

httpServer.listen(8081, () => { console.log("Server is up at Port 8081") });
module.exports = httpServer;