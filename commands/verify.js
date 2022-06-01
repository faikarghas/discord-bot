const { MessageEmbed } = require('discord.js');


module.exports={
    name:'verify',
    description:'this is verify command',
    async execute(message, args,client){
        const OWNER_ROLES_ID = '973233311637987348'
        
        if (message.member.roles.cache.has(OWNER_ROLES_ID)) {

        const channel = '973054706802892870'
        const memberRole = '981128578995458119'
        const verifyEmoji = '💊'

        let embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('React To verify')
        .setDescription('React with "💊" to get added to the Discord.')

        let messageEmbed = await message.channel.send({embeds: [embed]})
        messageEmbed.react(verifyEmoji)

        client.on('messageReactionAdd',async (reaction,user) =>{
            console.log(reaction,'add');

            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === verifyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                }
            } else {
                return;
            }
        })

        client.on('messageReactionRemove',async (reaction,user) =>{
            console.log(reaction,'remove');

            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === verifyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole);
                }
            } else {
                return;
            }
        })


        }
    }
}