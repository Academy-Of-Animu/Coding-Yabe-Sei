const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Changelog ${client.config.botVersion}`)
    .setDescription("- Games are here!! 🎉 we got `8ball` `rate` `roll`. more are coming soon\n- Version bumped to 0.3.0")
    .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
    .setFooter("Last updated on 24th/Dec/2018")
    .setColor(client.config.embedColor)
    
    message.channel.send(embed);
}

exports.help = {
    name: "changelog",
    description: "The `changelog` command displays an embed of latest changes to the bot.",
    usage: "`yabe changelog`",
}
