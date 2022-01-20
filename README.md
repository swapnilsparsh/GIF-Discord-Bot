# GIF-Discord-Bot
A simple discord bot that helps you send gif in your server using command `!gif` command

## Tech Stack
- [Discord.js](https://discord.js.org/)

## Steps to create new bot 

1. Create node project and install discord.js module.

```
$ npm init
$ npm install discord.js
```

2. [Create an application](https://discord.com/developers/applications/) - optionally set name, description, avatar.

3. Select Bot from left navigation and "Add Bot" - set name and icon.

4. Add bot to the your server with the url: `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot`

5. Write the code!

Login to bot account:
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('YOUR BOT TOKEN');
```

Callback for when the bot is connected and ready:
```javascript
client.once('ready', () => {
  console.log('Ready!');
});
```

Callback for when a message is posted:
```javascript
client.on('message', gotMessage);

function gotMessage(msg) {
  console.log(msg.content);
}
```

9. Run the bot!

```
$ node index.js
```

## Store token and other secrets in .env file.

1. Install [dotenv package](https://www.npmjs.com/package/dotenv).
```
$ npm install dotenv
```

2. Create `.env` file (get reference from .env.example file):

```
BOT_TOKEN=123456789
CHANNEL_TOKEN=123456789
API_KEY=123456789
```


## License

This project follows the [MIT License](/LICENSE).

#### Made with ♥ by <a href="https://swapnilsparsh.github.io/">Swapnil Srivastava</a>
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://swapnilsparsh.github.io/)

<a href="https://github.com/swapnilsparsh" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/swapnil-srivastava-sparsh/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
