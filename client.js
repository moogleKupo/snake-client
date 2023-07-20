const net = require("net");
const { IP, PORT } = require("./constants");

console.log("Connecting ...");

// Establishes a connection with the game server
function connect() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TLM");
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  return conn;
}

// Write the initial message to the server as soon as the connection is established

module.exports = { connect };
