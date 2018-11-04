const Discord = require('discord.js');

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .addField("**Commands**", "List of all available commands\nFor additional help with a command, type `>command <command name>`")
    .addField("**Moderation** *`must have Mods role`*", "`say` `kick` `ban`")
    .setColor(client.config.embedColor)
    .addField("**Fun**", "`placeholder`")
    .addField("**Games**", "`placeholder`")
    .addField("**Learning**", "`>learn` to learn more!")
    .addField("**Random**", "`ping` `help` `serverinfo` `info` `bug`\n\n\n")
    .setTimestamp()
    .setFooter("Created by Adam, Hesham and Marvin")

    message.channel.send(embed)
}