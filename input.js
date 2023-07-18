let connection;

const MOVES = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  z: "Say: Slytherin!",
  x: "Say: Griffindor!",
  c: "Say: Hufflepuff!",
  v: "Say: Ravenclaw!",
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (MOVES[key]) {
    connection.write(MOVES[key]);
  }
  // Handle other key inputs here if needed
};

module.exports = { setupInput };
