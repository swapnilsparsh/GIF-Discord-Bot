//Import other JS Files
const hello = require("./commands/hello.js");
const gif = require("./commands/gif.js");

//Store it in objects
const commands = { hello, gif };

module.exports = async function (msg) {
  if (msg.channel.id == "926231447990308875") {
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
