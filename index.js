const Discord = require('discord.js');
const bot = new Discord.Client();

client.on("ready", () => {	
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});

client.login(process.env.BOT_TOKEN);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
