console.log("Bot is running");

require("dotenv").config();

//Connect Discord
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);
client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("❤️");
}

//Import a commandHandler function from another .js File
const commandHandler = require("./commands");

client.on("message", commandHandler);
