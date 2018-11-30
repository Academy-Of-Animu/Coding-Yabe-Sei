const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Changelog ${client.config.botVersion}`)
    .setDescription("- Changed prefix from `>` to `yabe` to resolve conflicts\n- Added a `translate` command\n- Version bump")
    .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
    .setFooter("Last updated on 30th/Nov/2018")
    .setColor(client.config.embedColor)
    
    message.channel.send(embed);
}