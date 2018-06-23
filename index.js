const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disabeEveryone: true});

bot.on("ready", async () => {
	console.log('${bot.user.username} is online!')		
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});



bot.login(botconfig.token);