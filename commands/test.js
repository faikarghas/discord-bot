module.exports={
    name:'test',
    description:'this is test command',
    execute(message, args){
        message.channel.send('test balas')
    }
}