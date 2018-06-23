const Discord = require('discord.js');
const bot = new Discord.Client();
const BOT_TOKEN =_process.env.BOT_TOKEN;

client.on('ready', () => {	
	console.log("Sono pronta, Padron Tori.")
	bot.user.setActivity("cercare le Armi dei Peccati Capitali")
	bot.user.setStatus('Online')
});

client.on('message', message => {
	if (message.content === 'P-01s') message.reply('Noi due siamo incompatibili, come due linee parallele.');
});

client.login(BOT_TOKEN);


