const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor(client.config.embedColor)
        .setDescription(`:clock1: ${Date.now() - message.createdTimestamp}ms\n\n:heart: ${Math.round(client.ping)}ms`)

    message.channel.send(embed);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "ping",
    description: "The `ping` command returns the client's ping to the Discord API and the users ping to the client's host server.",
    usage: "`yabe ping`",
}
