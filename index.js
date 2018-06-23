const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disabeEveryone: true});

bot.on("ready", async () => {
	console.log('P-01s è online!')		
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});

client.login(process.env.NDU5ODI0MzQ4OTkyMjQxNjY0.Dg8s8Q.qUDrjqwmOGs-Lb1GnAJlljnTCjE);
bot.login(botconfig.token);
