const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()

    .setColor(client.config.embedColor)
    .setDescription(`[Click here to invite me to your server :3](https://discordapp.com/oauth2/authorize?client_id=506254054339379220&scope=bot&permissions=8)`)

  message.channel.send(embed)
}

exports.help = {
  type: "util",
  name: "invite",
  description: "The `invite` command sends an instant invite for Yabe straight to your own server(s).",
  usage: "`yabe invite`",
}
