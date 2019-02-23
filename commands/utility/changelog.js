const Discord = require("discord.js");

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
        .setTitle(`Changelog ${client.config.botVersion}`)
        .setDescription("Small update with a big new feature. Added a Pokemon module with `dex` and `move` commands. More to come in the future. Version Bump!")
        .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
        .setFooter("Last updated on 10th/Jan/2019")
        .setColor(client.config.embedColor);

    message.channel.send(embed);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "changelog",
    description: "The `changelog` command displays an embed of latest changes to the bot.",
    usage: "`yabe changelog`",
}
