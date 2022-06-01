module.exports={
    name:'youtube',
    description:'this is yt command',
    execute(message, args){
        const OWNER_ROLES_ID = '973233311637987348'

        if (message.member.roles.cache.some(r => r.name === "Owner")) {
        // if (message.member.roles.cache.has(OWNER_ROLES_ID)) {
            message.channel.send('http://youtube.com/codelyon')
        } else {
            message.channel.send('you cant send this command, let me change that')
            message.member.roles.add(OWNER_ROLES_ID).catch(console.error);

        }
    }
}