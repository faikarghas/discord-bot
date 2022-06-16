const {generalChatChannelId,slowChatChannelId,hobbiesChannelId,fanArtChatChannelId,memesChatChannelId,suggestionChatChannelId} = require('../utils/config.js')

module.exports = (client) => {
    client.on('messageCreate', async message => {
        const {channelId,author,content} = message
        if (author.bot !== true) {
            let checkContentLength = content.split('').length
            if (generalChatChannelId == channelId ||
                slowChatChannelId  == channelId ||
                hobbiesChannelId  == channelId ||
                fanArtChatChannelId  == channelId ||
                memesChatChannelId  == channelId ||
                suggestionChatChannelId  == channelId
            ) {
                if (checkContentLength > 5 ) {
                    addEXP(20,author.id,author.username,author.discriminator)
                }
            }

        }
    })
}

const db = require('../db.js')

const addEXP =  (addExp,userId,username,discriminator) => {
    let sql = `select * from users where discord_id = ${userId}`
    let data = {
        username: username,
        exp: 0,
        level: 1,
        discord_id: userId,
        discriminator: discriminator
    }
    db.query(sql,(err,result)=>{
        if (result.length === 0) {
            db.query(`insert into users set ?`,data,(err,response)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log('added',response);
                }
            })
        } else {
            let getNeededEXP = level => level * level * 200
            let {exp,level,discord_id} = result[0]
            const needed = getNeededEXP(level)
            if (exp > needed) {
                let updatedLevel = ++level
                let updatedExp = exp -= needed

                let updatedData = {
                    exp: updatedExp,
                    level: updatedLevel,
                }

                db.query(`update users set ? where discord_id = ${discord_id}`,updatedData,(err,response)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Level Up!');
                    }
                })
            } else {
                let updatedData = {
                    exp: exp + addExp,
                }
                db.query(`update users set ? where discord_id = ${discord_id}`,updatedData,(err,response)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Added EXP!');
                    }
                })
            }

        }
    })

}
