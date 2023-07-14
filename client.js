const net = require("net");

console.log("Connecting ...");

// Establishes a connection with the game server
function connectServer() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
  conn.on("data", (data) => {
    if (data === "you ded cuz you idled\n") {
      console.log("You were kicked out for idling!");
    } else {
      console.log("Received data:", data);
    }
  });

  return conn;
}

module.exports = { connect: connectServer };
