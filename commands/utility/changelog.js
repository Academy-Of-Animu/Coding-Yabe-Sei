const Discord = require("discord.js");

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle(`Changelog ${client.config.botVersion}`)
    .setDescription("- We got a new way to owo your messages up with `yabe owofy`\n- added the `flip` and `vote` commands.\n- no version bump this time owo")
    .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/bhZGHCm)")
    .setFooter("Last updated on 2nd/Jan/2019")
    .setColor(client.config.embedColor)

  message.channel.send(embed);
}

exports.help = {
  type: "util",
  name: "changelog",
  description: "The `changelog` command displays an embed of latest changes to the bot.",
  usage: "`yabe changelog`",
}
