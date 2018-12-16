const Discord = require("discord.js");

exports.run = (client, message, [mention, ...reason]) => {

	if (!message.member.hasPermission("BAN_MEMBERS"))
		return message.reply("You can't use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("Please mention a user to ban");
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply("I need permissions to ban!");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("Can't ban an Admin :p");

	const banMember = message.mentions.members.first();

	const embed = new Discord.RichEmbed()
		.setTitle("Banned from server")
		.setDescription(banMember.guild)
		.setThumbnail(banMember.guild.iconURL)
		.setColor(client.config.embedColor)
		.setTimestamp()
		.setFooter(`Banned by ${message.author.username}`)

	if (banMember.bannable) {
		if (reason != "") {
			embed.addField("Reason for ban", `${reason.join(" ")}`)
			banMember.send(embed);
		}
		else {
			embed.addField("Reason for ban", "No reason was specified")
			banMember.send(embed);
		}
		setTimeout(() => banMember.ban().then(member => {
			message.reply(`${member.user.username} was succesfully banned.`);
		}), 2000);
	} else {
		message.channel.send(`Failed to ban member ${banMember}`);
	}
}

exports.help = {
    name: "ban",
    description: "The `ban` command requires `Ban Members` permission. It allows you to ban a specified user.",
    usage: "`yabe ban <@user>`",
}