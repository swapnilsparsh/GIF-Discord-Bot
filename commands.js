//Import other JS Files
const gif = require("./commands/gif.js");

//Store it in objects
const commands = { gif };

module.exports = async function (msg) {
  // For restricting the bot in a particular channel
  if (msg.channel.id == process.env.CHANNEL_TOKEN) {
    //Checks and make sure if it is a valid message
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
      //Executes a proper function associated with that command
      command = command.substring(1);
      commands[command](msg, tokens);
      // valid command !
    }
  }
};
