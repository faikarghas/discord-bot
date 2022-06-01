
const { Client, Intents, Collection, Constants } = require('discord.js');

const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MEMBERS ],
    partials: ['MESSAGE','CHANNEL','REACTION']
});
const {token,welcomeChannelId,guildId} = require('./config.json')
const generateImage = require('./generateImage')
const levels = require('./commands/levels.js')

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file=>{
    return file.endsWith('.js')
})
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', ()=>{
    console.log('bot ready');

    levels(client)

    // guild.commands.delete('975077471181471776')
    // .then(console.log)
    // .catch(console.error);
})

// INTERNAL COMMAND
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;
	const { commandName,options } = interaction;

    const command = client.commands.get(interaction.commandName);
    let option = interaction.options.get('num')
    console.log(interaction);

    switch (commandName) {
        case 'clear':
            await command.execute(interaction,option.value)
            break;
        case 'server':
            await interaction.reply('Server info.');
            break;
        case 'user':
            await interaction.reply('User info.');
            break;
        default:
            break;
    }
});

// WELCOME BOT
client.on('guildMemberAdd', async member => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to Paranoid Slay!`,
        files: [img]
    })
})


const prefix = "!";

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length)
    const args = message.content.substring(prefix.length).split(' ')
    switch (args[0]) {
        case 'test':
            client.commands.get('test').execute(message)
            break;
        case 'verify':
            client.commands.get('verify').execute(message,0,client)
            break;
        default:
            break;
    }

});


client.login(token);

