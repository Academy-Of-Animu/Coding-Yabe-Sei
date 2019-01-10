const Discord = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send('Command coming soon!')
}

//going to allow mods to send an embed for cleaner looking rules and info templates

// mmm, i could do this
// - darko

exports.help = {
  name: "rule",
  description: "Coming soon!",
  usage: "Comnig soon!",
}
