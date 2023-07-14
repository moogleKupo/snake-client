const { connect: clientConnect } = require("./client.js");

console.log("Connecting ...");
clientConnect();

// establishes a connection with the game server
function connectServer() {
  const net = require("net");
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
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