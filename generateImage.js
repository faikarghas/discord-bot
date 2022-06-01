const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas')

const background = "https://i.imgur.com/zvWTUVu.jpg"

const dim = {
    height: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) =>{
    console.log(member.user);
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format:"png",dynamic:false,size: av.size})

    const canvas = Canvas.createCanvas(dim.width,dim.height)
    const ctx = canvas.getContext("2d")

    //
    const backing = await Canvas.loadImage(background)
    ctx.drawImage(backing, 0, 0)

    //
    ctx.fillStyle = "rgb(0,0,0,0.3)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2,true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // draw in Welcome
    ctx.font = "50px Roboto"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)
 
    // draw in the username
    ctx.font = "40px Roboto"
    ctx.fillText(username + '#' + discrim, dim.width/2, dim.height - dim.margin - 125)
 
    // draw in to the server
    // ctx.font = "40px Roboto"
    // ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 50)

    const attachment = new MessageAttachment(canvas.toBuffer(),"welcome.png")

    return attachment;
}

module.exports = generateImage;