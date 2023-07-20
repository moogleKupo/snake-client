const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

setupInput(connection);

const input = setupInput();

// Establishes a connection with the game server
function connectServer() {
  const net = require("net");
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

console.log("Connecting ...");
connectServer();
