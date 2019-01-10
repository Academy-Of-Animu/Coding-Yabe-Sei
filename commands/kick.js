const Discord = require("discord.js");

exports.run = async (client, message, [mention, ...reason]) => {

  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("You can't use this command.");
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("I need permissions to kick!");
  if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
    return message.reply("Can't kick an Admin :p");

  const kickMember = message.mentions.members.first();

  const embed = new Discord.RichEmbed()
    .setTitle("Kicked from server")
    .setDescription(kickMember.guild)
    .setThumbnail(kickMember.guild.iconURL)
    .setColor(client.config.embedColor)
    .setTimestamp()
    .setFooter(`Kicked by ${message.author.username}`)

  message.channel.send('Are you sure you want to kick this user?\nreply with "yes" or "no" in the next 10 seconds');

  await message.channel.awaitMessages(msg => msg.content.toLowerCase() == "yes" || msg.content.toLowerCase() == "no", {
      maxMatches: 1,
      max: 1,
      time: 10000,
      errors: ['time']
    })
    .then(msg1 => {
      if (msg1.first().author != message.author) {
        message.channel.send("only user whom requested the kick can accept or decline")
      } else {
        if (msg1.first().content.toLowerCase() == "yes") {
          setTimeout(() => kickMember.kick().then(member => {
            message.reply(`${member.user.username} was succesfully kicked.`);
          }), 2000);
          if (kickMember.kickable) {
            if (reason != "") {
              embed.addField("Reason for kick", `${reason.join(" ")}`)
              kickMember.send(embed);
            } else {
              embed.addField("Reason for kick", "No reason was specified")
              kickMember.send(embed);
            }
          } else {
            message.channel.send(`Failed to kick member ${kickMember}`);
          }
        } else if (msg1.first().content.toLowerCase() == "no") {
          message.channel.send("Kicking aborted");
        }
      }
    })
    .catch(() => message.channel.send("No answer was provided within the 10 second window. aborting kick..."));
}

exports.help = {
  name: 'kick',
  description: 'The `kick` command requires `Kick Members` permission. It allows you to kick a specified user.',
  usage: '`yabe kick <@user> <reason>(optional)`'
}
