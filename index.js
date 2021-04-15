const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('ODMyMjg4MzQzMTMxMTYwNjI2.YHhm7A.wJLXZfehVT2YaWrTx27MIPuFuMM');