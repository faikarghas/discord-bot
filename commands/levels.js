module.exports = (client) => {
    client.on('messageCreate', async message => {
        const {guildId,author} = message
        if (author.bot !== true) {
            addEXP(guildId,author.id)
        }
    })
}

const addEXP =  (guildId,userId,xpToAdd,message) => {
    console.log(guildId,userId);

    let getNeededEXP = level => level * level * 100

    // cek data user di database
    const result = {
        nama:'faikar',
        exp:0,
        level:0
    }

    const {nama,exp,level} = result
    const needed = getNeededEXP

    if (exp > needed) {
        ++level
        xp -= needed
    }
}
