const Discord = require("discord.js");

exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Mods");
    if (!modRole)
      return console.log("The Mods role does not exist");
    if (!message.member.roles.has(modRole.id))
      return message.reply("You can't use this command.");
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to kick");
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("I need permissions to kick!");
      
    const kickMember = message.mentions.members.first();

    const embed = new Discord.RichEmbed()
    .setTitle("Kicked from server")
    .setDescription(kickMember.guild)
    .setThumbnail(kickMember.guild.iconURL)
    .setColor(client.config.embedColor)
    .setTimestamp()
    .setFooter(`Kicked by ${message.author.username}`)

    if (reason != "") {
      embed.addField("Reason for kick", `${reason.join(" ")}`)
      kickMember.send(embed);
    }
    else {
      embed.addField("Reason for kick", "No reason was specified")
      kickMember.send(embed);
    }

    setTimeout(() => kickMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
    }), 2000);
}