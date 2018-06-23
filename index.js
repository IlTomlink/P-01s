const Discord = require('discord.js');
const bot = new Discord.Client();
const BOT_TOKEN = 'NDU5ODI0MzQ4OTkyMjQxNjY0.Dg-vnw.0VVCDYwF0DKHn4e0KeoE38tAvbc';

client.on('ready', () => {	
	console.log("Sono pronta, Maestro Tori.")
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});

client.on('message', message => {
	if (message.content === 'P-01s') message.reply('Noi due siamo incompatibili, come due linee parallele.');
});

client.login(BOT_TOKEN);


