let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "z") {
      connection.write("Say: Slytherin!");
    } else if (key === "x") {
      connection.write("Say: Griffindor!");
    } else if (key === "c") {
      connection.write("Say: Hufflepuff!");
    } else if (key === "v") {
      connection.write("Say: Ravenclaw!");
    } // Handle other key inputs here if needed
  };

  stdin.on("data", handleUserInput);
};

module.exports = { setupInput };
