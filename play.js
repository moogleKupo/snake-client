const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Handle incoming data
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
  });


  return conn;
};

console.log("Connecting ...");
connect();