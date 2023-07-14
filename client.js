const net = require("net");

console.log("Connecting ...");

// Establishes a connection with the game server
function connect() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TLM");
    // conn.write("Move: up"); // Commented out the "hard-coded" Move: up message
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
  });

  return conn;
}

// Write the initial message to the server as soon as the connection is established
const client = connect();
client.write("Name: TLM");

module.exports = { connect };