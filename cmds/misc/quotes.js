const Commando = require('discord.js-commando')
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = class QuoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'misc',
            memberName: 'quote',
            description: 'Get a kanye quote'
        })
    }

    run = async (message) => {
        axios.get('https://api.kanye.rest/')
         .then((res) =>{
            const embed = new MessageEmbed()
            .setTitle(`Kanye Quote`)
            .setColor('#FF0000')
            .setDescription(res.data.quote)
            .setFooter("Requested by " + message.author.tag, message.author.avatarURL())


            message.channel.send(embed)
         })      
         .catch((err) =>{
             console.error('ERR:', err)
         })
    }
}