const fetch = require("node-fetch");

module.exports = async function (msg, args) {
  let searchKeyword = "forgot";
  if (args.length > 0) {
    //!gif excited man
    //["!gif", "excited", "man"]
    // After using slice -> "excited man"

    searchKeyword = args.join(" ");
  }
  let url = `https://g.tenor.com/v1/search?q=${searchKeyword}&key=${process.env.TENORKEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
};
