const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let snipe = client.snipeMap.get(message.guild.id)
    if(!snipe) return message.channel.send(new Discord.RichEmbed().setColor(client.config.embedColor).setDescription('Could not find a message that was deleted.'));

    return message.channel.send(new Discord.RichEmbed().setColor(client.config.embedColor).setDescription(`Message: ${snipe.content}\n\nAuthor: <@${snipe.author.id}>`));

}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "utility",
    name: "snipe",
    description: "The `snipe` command allows you to view the last deleted message in the server. Can assist in identifying ghost pingers.",
    usage: "`yabe snipe`"
}
