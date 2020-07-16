import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

const message2JSON = (message) =>
  JSON.parse(Buffer.from(message).toString("utf8"));
const JSON2Message = (json) => JSON.stringify(json);
// const req = message2JSON(message);
// const res = JSON2Message(req);

wss.on("connection", function connection(ws, req) {
  wss.clients.forEach(client => {
    if (client !== ws) {
      client.send(req.connection.remoteAddress)
    }
  })
});
