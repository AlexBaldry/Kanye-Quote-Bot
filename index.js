require('module-alias/register')

const Discord = require('discord.js')
//  const client = new Discord.Client()

const path = require('path')
const Commando = require('discord.js-commando')

const config = require('@root/config.json')

const client = new Commando.CommandoClient({
  owner: '626130640768729088',
  commandPrefix: config.prefix,
})

client.on('ready', async () => {
  console.log('Bot is online')
    setInterval(() => {
      client.user.setPresence({
        status: "online",
        activity: {
          name: `${client.users.cache.size} users`,
          type: "WATCHING"
        }
      }, 300000 )
  })

  client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

client.login(config.token)
