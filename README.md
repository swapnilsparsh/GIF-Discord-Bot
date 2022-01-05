# GIF-Discord-Bot [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

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
```

#### Made with ♥ by <a href="https://swapnilsparsh.github.io/">Swapnil Srivastava</a>
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://swapnilsparsh.github.io/)

<a href="https://github.com/swapnilsparsh" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/swapnil-srivastava-sparsh/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
