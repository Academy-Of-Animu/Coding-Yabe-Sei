const Discord = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send('Command coming soon!')
}

//going to allow mods to send an embed for cleaner looking rules and info templates

// mmm, i could do this. pretty simple to be honest, if you want me to lemme know fam.
// - darko

exports.help = {
  enabled: true,
  hideHelp: true,
  type: "mod",
  name: "rule",
  description: "Coming soon!",
  usage: "Comnig soon!",
}
