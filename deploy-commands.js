const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, TOKEN } = require('./config.js');

const commands = [
	new SlashCommandBuilder().setName('clear').setDescription('Clear chat')
	.addIntegerOption(option =>
		option.setName("num")
		  .setDescription("Some argument")
		  .setRequired(true)
	),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!')
	// .addIntegerOption(option=> 
	// 	option.setName("info")
	// 	.setDescription("Some argument")
	// 	.setRequired(true)
	// ),
	,
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!')
	.addUserOption(option=>
		option.setName("pilih")
		.setDescription("Some argument")
		.setRequired(true)
	),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);