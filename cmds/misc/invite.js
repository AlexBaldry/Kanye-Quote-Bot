const Commando = require('discord.js-commando')
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = class QuoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Get invite'
        })
    }

    run = async (message) => {
        const embed = new MessageEmbed()
            .setTitle(`Help Menu`)
            .setColor('#00ff04')
            .setDescription('[Click me](https://discord.com/api/oauth2/authorize?client_id=770096867765518377&permissions=0&scope=bot) to invite the bot ')
            .setFooter("Built with ❤️ by Rooftop", 'https://cdn.discordapp.com/avatars/626130640768729088/a_7882b704956440d300f0de9807e77a5f.webp?size=256')
        
        message.channel.send(embed)
    }
}