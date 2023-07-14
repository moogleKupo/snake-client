const { connect: clientConnect } = require("./client.js");

console.log("Connecting ...");
clientConnect();

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

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  // Handle other key inputs here if needed
};

const input = setupInput();
input.on("data", handleUserInput);

console.log("Connecting ...");
connectServer();
