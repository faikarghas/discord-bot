module.exports = (client) => {
    client.on('messageCreate', async message => {
        console.log(message)
        const {guildId,author} = message
        addEXP(guildId,author[id])
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
    const needed = level(level)

    if (xp > needed) {
        ++level
        xp -= needed
    }
}
