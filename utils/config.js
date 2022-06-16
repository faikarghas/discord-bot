const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, '.env') })

module.exports = {
    TOKEN: process.env.TOKEN,
    guildId:"973054675890872340",
    clientId:"974749930113597470",
    welcomeChannelId:"973054675890872343",
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME
};