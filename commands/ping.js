const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor(client.config.embedColor)
    .setDescription(`:clock1: ${Date.now() - message.createdTimestamp}ms\n\n:heart: ${Math.round(client.ping)}ms`)

    message.channel.send(embed)
}
