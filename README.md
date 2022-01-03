# GIF-Discord-Bot

## Store token and other secrets in .env file.

1. Install [dotenv package](https://www.npmjs.com/package/dotenv).
```
$ npm install dotenv
```

2. Create `.env` file:

```
SERVERID=123456789
CHANNELID=123456789
TOKEN=123456789
```

3. Load environment variables using `dotenv` and `.env`:

```javascript
require('dotenv').config();
const serverID = process.env.SERVERID;
const channelID = process.env.CHANNELID;
const TOKEN = process.env.TOKEN;
