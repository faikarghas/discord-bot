module.exports={
    name:'clear',
    description:'this is clear command',
    async execute(message, args){
        const OWNER_ROLES_ID = '973233311637987348'

        // if (message.member.roles.cache.some(r => r.name === "Hokage")) {
        if (message.member.roles.cache.has(OWNER_ROLES_ID)) {
            if (!args) {
                await message.reply('Masukan jumlah chat yang ingin dihapus')
            } else {
                message.channel.bulkDelete(args,true)
                await message.reply('cleared')
                console.log('cleared message');
            }
        } else {
            message.reply('you cant send this command')
        }
    }
}