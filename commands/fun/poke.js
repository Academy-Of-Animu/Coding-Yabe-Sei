const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let personPoke = message.mentions.members.first()
  let pokes = ['https://i.imgur.com/Ym7K7sn.gif', 'https://i.imgur.com/RdYoGmA.gif', 'https://i.imgur.com/hjMRxyZ.gif', 'https://i.imgur.com/wa2dUw4.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/1fQITL7.gif', 'https://i.imgur.com/yOEOe9J.gif']
  let pokesR = pokes[Math.floor(Math.random() * pokes.length)]
  let quote
  let quoteR
  if (!personPoke) {
    let personPoke = "nobody"

    let embed = new Discord.RichEmbed()
      .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
      .setImage(pokesR)
      .setColor(client.config.embedColor)

    message.channel.send(embed)
    return
  }

  let embed = new Discord.RichEmbed()
    .setDescription(`**<@${message.author.id}> just poked ${personPoke}!**`)
    .setImage(pokesR)
    .setColor(client.config.embedColor)

  message.channel.send(embed)
}

exports.help = {
  type: "fun",
  name: "poke",
  description: "The `poke` command allows you to poke your friends!",
  usage: "`yabe poke <person to poke>`",
}
