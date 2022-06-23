const { MessageEmbed } = require('discord.js');


module.exports={
    name:'verify',
    description:'this is verify command',
    async execute(message, args,client){
        const OWNER_ROLES_ID = '973233311637987348'
        const channel = '973054706802892870'
        const memberRole = '981128578995458119'
        const verifyEmoji = '💊'

        if (message.member.roles.cache.has(OWNER_ROLES_ID)) {
            let embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('React To verify')
            .setDescription(`
            React with 💊 to get added to the Discord.

            - BE RESPECTFUL!

            - No Spam of any kind in the general chat. We have a shill zone, so please use this channel for any new/different projects.

            - Harassing, taunting, and inciting arguments will result in a punishment. This includes direct and indirect insults.

            - Toxic behavior won't be tolerated. (scamming, bullying, harassing, hate, etc)

            - Use appropriate channels.

            - ALL DMs ARE SCAMS! We will never start a conversation with anyone, if we want to DM someone we will ask you to friend request us first. We will not start a DM with you!

            - No NSFW images, links, or posts.

            - No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.`)

            let messageEmbed = await message.channel.send({embeds: [embed]})
            messageEmbed.react(verifyEmoji)
        }

        client.on('messageReactionAdd',async (reaction,user) =>{
            console.log(reaction.emoji.name,'add');

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