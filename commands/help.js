const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  if (args[0]) {
    fs.readdir("./commands/", (err, files) => {
      if (err) console.error(err);

      try {
        files.forEach(file => {
          let commands = [];
          let props = require(`./${file}`);
          let cmdName = props.help.name;
          let cmdDescription = props.help.description;
          let cmdUsage = props.help.usage;
          commands.push(cmdName);

          if (commands.includes(args[0])) {
            if (args[0] == file.split('.')[0]) {
              const embed = new Discord.RichEmbed()
                .addField(`**${cmdName[0].toUpperCase() + cmdName.slice(1)} Command**`, cmdDescription)
                .addField('Usage', cmdUsage)
                .setColor(client.config.embedColor)

              message.channel.send(embed);
            }
          }
        });
      } catch (err) {
        message.channel.send("An error has occured while processing your request. if this persists send a bug report using `yabe bug`");
        console.log(err)
      }
    });
  } else {
    const embed = new Discord.RichEmbed()
      .setColor(client.config.embedColor)
      .addField("**Changelog**", "You can check the latest changes with `yabe changelog`")
      .addField("**Commands**", "List of all available commands\nFor additional help with a command, type `yabe help <command name>`\nThank you for using the Yabe beta bot! We hope you will stick with us!")
      .addField("**Moderation** *`each require certain perms`*", "`say` `kick` `ban` `rem` `send` `vote`")
      .addField("**Fun**", "`meme` `poke` `slap` `rate` `smug` `owofy` `dog` `fluff`")
      .addField("**Games**", "`8ball` `roll` `flip`")
      .addField("**Learning**", "`yabe learn` to learn more! [coming soon, I promise]")
      .addField("**Random**", "`roles` `addrole` `ping` `help` `serverinfo` `info` `bug` `invite` `whois` `avatar` `changelog` `translate` `uptime` `osu` `channel`")
      .setFooter("Created by Adam, Hesham and Marvin")
      .setTimestamp()

    message.channel.send(embed)
  }
}

exports.help = {
  type: "util",
  name: "help",
  alt: ["halp","commands","cmds","h"],
  description: "The `help` command displays a help menu, which contains a list of commands and a way to find further help.",
  usage: "`yabe help`"
}
