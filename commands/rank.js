const db = require('../db.js')
const {rankCheckChannelId} = require('../utils/config.js')

module.exports={
    name:'rank',
    description:'this is check rank command',
    execute(message, args){
        const {channelId,author,content} = message

        if (channelId == rankCheckChannelId) {
            let sql = `select * from users where discord_id = ${author.id}`

            db.query(sql,(err,result)=>{
                message.channel.send(`Level: ${result[0].level}, Exp: ${result[0].exp}`)
                console.log(result);
            })
        }

        

    }
}