const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Changelog ${client.config.botVersion}`)
    .setDescription("- Added a `send` command\n- Added a `channel` command\n- List of languages now available for translate command, use `yabe translate list`\n- Version bump")
    .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
    .setFooter("Last updated on 22th/Dec/2018")
    .setColor(client.config.embedColor)
    
    message.channel.send(embed);
}

exports.help = {
    name: "changelog",
    description: "The `changelog` command displays an embed of latest changes to the bot.",
    usage: "`yabe changelog`",
}
