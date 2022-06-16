const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, '../.env') })

module.exports = {
    TOKEN: process.env.TOKEN,
    guildId:"973054675890872340",
    clientId:"974749930113597470",
    welcomeChannelId:"973054675890872343",
    generalChatChannelId:"984091605252333578",
    slowChatChannelId:"984092265901346846",
    hobbiesChannelId:"984092323048743003",
    fanArtChatChannelId:"984092370670874624",
    memesChatChannelId:"984092408121806988",
    suggestionChatChannelId:"984093323679662220",
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME
};