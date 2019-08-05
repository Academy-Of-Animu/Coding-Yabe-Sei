const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let snipe = client.snipeMap.get(message.guild.id)
    if(!snipe) return message.channel.send('Could not find a message that was deleted.'.embedify())
    let counter = 0

    return message.channel.send(new Discord.RichEmbed().setDescription(`${snipe.map(msg => `**${++counter} -** ${msg.content}\n**Author -** <@${msg.author.id}>`).join('\n\n')}`).setColor(client.config.embedColor).addField('NOTE:', `Message appear in order, newest deleted message is \`1.\` ,etc. Only the last five deleted messages are preserved. Messages above a 200 character limit are truncated to fit within the embed. Images are not preserved.`))

}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "utility",
    name: "snipe",
    description: "The `snipe` command allows you to view the last deleted message in the server. Can assist in identifying ghost pingers.",
    usage: "`yabe snipe`"
}
