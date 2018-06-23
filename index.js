const Discord = require('discord.js');
const bot = new Discord.Client();

client.on("ready", () => {	
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});

client.login(process.env.BOT_TOKEN);
