const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const { config } = client;
    let bugText = args.join(" ");
    if (!bugText) return message.reply("I can't send an empty bug report!");
    message.reply("Thank you for submitting a bug, hopefully it won't require major surgery :grimacing:");
    const bug = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n\n"${bugText}"\n\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    let embed = new Discord.RichEmbed()
        .setTitle("Bug Report")
        .setDescription(bug)
        .setColor(client.config.embedColor);

    client.channels.get(config.bugChannel).send(embed)
        .catch(console.error);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "bug",
    aliases: ["report"],
    description: "The `bug` command allows the user to send a bug receipt to the developers of the bot.",
    usage: "`yabe bug <bug message>`",
}
