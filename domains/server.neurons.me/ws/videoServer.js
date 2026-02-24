import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 9001 });
console.log("📡 WebSocket server running on ws://localhost:9001");
let lastFrame = null;
wss.on("connection", (socket) => {
  console.log("🚛 Client connected");
  // Recibimos frames desde la Raspberry
  socket.on("message", (data) => {
    lastFrame = data;
    // Broadcast a todos los dashboards conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client !== socket) {
        client.send(data);
      }
    });
  });

  socket.on("close", () => console.log("❌ Client disconnected"));
});