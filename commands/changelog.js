const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Changelog V${client.config.botVersion}`)
    .setDescription("- Fixed reason for kick command\n- Removed the need for a `Mods` role\n- New changelog command(this!!)\n- Small version bump")
    .setFooter("Last updated on 25th/Nov/2018")
    .setColor(client.config.embedColor)
    
    message.channel.send(embed);
}
