module.exports = (client) => {
    client.on('messageCreate', async message => {
        const {guildId,author} = message
        if (author.bot !== true) {
            addEXP(guildId,author.id)
        }
    })
}

const db = require('../db.js')

const addEXP =  (guildId,userId,xpToAdd,message) => {
    let sql = `select * from users`
    db.query(sql,(err,result)=>{
        if (!err) res.status(201).send(result)
    })

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
