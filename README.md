# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

If you haven't played snake, you may be young! This was the most popular game on mobile phones back in 2004 and honestly, still one of the best games around! This is my first published game project and second published npm project, so you might be some one that I want to work with, and I would like to thank you for your consideration!

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install with the following instructions:

1. Clone the Snek Multiplayer Server repository to your local machine: git clone https://github.com/lighthouse-labs/snek-multiplayer.git

2. Navigate to the root directory of the Snek Multiplayer Server:
cd snek-multiplayer

3. Install the required dependencies:

npm install

4. After you have installed the dependencies and configured the server, you can start it using the following command:

npm start
This will launch the Server, and it will start listening for incoming connections.

5. To connect, you need to have the Snek Client set up and running.

Gameplay
Once you have the Snek Client connected to the Snek Multiplayer Server, you can start playing the game! Use the WASD keys to control the movement of your snake. Avoid hitting the walls or colliding with other snakes, that will result in Game Over!

W - Move Up
A - Move Left
S - Move Down
D - Move Right

Additionally, you can use the Z, X, C, and V keys to send canned messages that will be displayed to all players in the game.

Have fun!!


## Final Product

!["Upon Connection"](.docs/screenshot1.png)
!["In Game Action!"](.docs/screenshot2.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.