const fetch = require("node-fetch");

module.exports = async function (msg, args) {
  let searchKeyword = "forgot";
  if (args.length > 0) {
    //!gif excited man
    //["!gif", "excited", "man"]
    // After using slice -> "excited man"

    searchKeyword = args.join(" ");
  }
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.TENORKEY}&q=${searchKeyword}&limit=5&offset=0&rating=g&lang=en`;
  
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.data.length);
  msg.channel.send(json.data[index].url);
};
