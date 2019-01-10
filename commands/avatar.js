const Discord = require('discord.js');

exports.run = (client, message, args) => {
  try {
    let mem = args.join(' ')
    let memb = message.guild.members.find(m => [m.displayName.toLowerCase(), m.user.username.toLowerCase()].includes(mem.toLowerCase()))

    if (mem.includes('@')) {
      let memb = message.mentions.users.first()

      let embed = new Discord.RichEmbed()
        .setImage(memb.displayAvatarURL)
        .setColor(client.config.embedColor)

      message.channel.send(embed)
      return
    }

    let embed = new Discord.RichEmbed()
      .setImage(memb ? memb.user.displayAvatarURL : message.author.displayAvatarURL)
      .setColor(client.config.embedColor)

    message.channel.send(embed)
  } catch (err) {
    console.log(err)
  }
}

exports.help = {
  name: "avatar",
  description: "The `avatar` command sends the specified user's profile avatar on Discord. Leave empty to get your own avatar.",
  usage: "`yabe avatar <desired user(without @)/leave blank for own>`",
}
