const Commando = require('discord.js-commando')
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = class QuoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'misc',
            memberName: 'help',
            description: 'Get help'
        })
    }

    run = async (message) => {
        const embed = new MessageEmbed()
            .setTitle(`Help Menu`)
            .setColor('#00ff04')
            .addFields(
                { name: '?help', value: 'Displays this message' },
                { name: '?quote', value: 'Displays a quote' },
                { name: '?invite', value: 'Get an invite link' },
                { name: '?vote', value: 'Upvote the bot' },
            )
            .setFooter("Built off the kanye.rest API | Built with ❤️ by Rooftop", 'https://cdn.discordapp.com/avatars/626130640768729088/a_7882b704956440d300f0de9807e77a5f.webp?size=256')
        
        message.channel.send(embed)
    }
}