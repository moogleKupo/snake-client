const net = require("net");

console.log("Connecting ...");

// Establishes a connection with the game server
function connect() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
  });

  return conn;
}

module.exports = { connect };