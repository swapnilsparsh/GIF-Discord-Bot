const replies = ["Oh, hi!", "Hey there!", "Yo!", "Greetings", "Hey"];

module.exports = function (msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
