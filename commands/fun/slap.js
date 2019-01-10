const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let slaps = ['https://i.imgur.com/4iPCfVO.gif', 'https://i.imgur.com/8g6t0a3.gif', 'https://i.imgur.com/u7bKmq0.gif', 'https://i.imgur.com/v1u3DpJ.gif', 'https://i.imgur.com/T7npUHy.gif', 'https://i.imgur.com/rDSHdbw.gif', 'https://i.imgur.com/VtbV4HW.gif', 'https://i.imgur.com/lzc81Yw.gif', 'https://i.imgur.com/MnfAJbs.gif']
  let slapR = slaps[Math.floor(Math.random() * slaps.length)]
  let personslap = message.mentions.members.first()
  let quote = ['Oof', 'Ouch', 'That hurt', 'Wow', 'LOL', 'Yeet']
  let quoter = quote[Math.floor(Math.random() * quote.length)]

  if (!personslap) {
    let personslap = 'nobody'

    let embed = new Discord.RichEmbed()
      .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
      .setImage(slapR)
      .setColor(client.config.embedColor)

    message.channel.send(embed)
    return
  }

  if (personslap.id === message.author.id) {
    let personslap = 'they own damn selves'
    let embed = new Discord.RichEmbed()
      .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
      .setImage(slapR)
      .setColor(client.config.embedColor)

    message.channel.send(embed)
    return
  }

  if (personslap.id === client.user.id) {
    let personslap = 'me, the fricc?'
    let embed = new Discord.RichEmbed()
      .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
      .setImage(slapR)
      .setColor(client.config.embedColor)

    message.channel.send(embed)
    return
  }

  let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}> just slapped ${personslap}! ${quoter}!**`)
    .setImage(slapR)
    .setColor(client.config.embedColor)

  message.channel.send(embed)
}

exports.help = {
  type: "fun",
  name: "slap",
  description: "The `slap`command allows you to slap your friends to show your disdain for them! \:)",
  usage: "`yabe slap <@user>`",
}
