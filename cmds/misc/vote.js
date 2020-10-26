const Commando = require('discord.js-commando')
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = class QuoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vote',
            group: 'misc',
            memberName: 'vote',
            description: 'vote'
        })
    }

    run = async (message) => {
        const embed = new MessageEmbed()
            .setTitle(`Error`)
            .setColor('#FF0000')
            .setDescription('Command coming soon once bot accepted...')
            .setFooter("Requested by " + message.author.tag, message.author.avatarURL())
        message.channel.send(embed)
    }
}