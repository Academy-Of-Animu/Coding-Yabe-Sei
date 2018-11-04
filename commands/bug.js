const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let bugText = args.join(" ")
    message.reply("Thank you for submitting a bug, hopefully it won't require major surgery :grimacing:")
    const bug = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n\n"${bugText}"\n\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`
    let embed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setDescription(bug)
    .setColor(client.config.embedColor)

    client.channels.get('505094982085115905').send(embed)

}