const Discord = require("discord.js");

exports.run = async (client, message, [mention, ...reason]) => {

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

		message.channel.send('Are you sure you want to ban this user?\nreply with "yes" or "no" in the next 10 seconds');

		await message.channel.awaitMessages(msg => msg.content.toLowerCase() == "yes" || msg.content.toLowerCase() == "no",
			{
				maxMatches: 1,
				max: 1,
				time: 10000,
				errors: ['time']
			})
			.then(msg1 => {
				if (msg1.first().author != message.author) { message.channel.send("only user whom requested the ban can accept or decline") } else {
					if (msg1.first().content.toLowerCase() == "yes") {
						setTimeout(() => banMember.ban().then(member => {
							message.reply(`${member.user.username} was succesfully banned.`);
						}), 2000);
						if (banMember.bannable) {
							if (reason != "") {
								embed.addField("Reason for ban", `${reason.join(" ")}`)
								banMember.send(embed);
							}
							else {
								embed.addField("Reason for ban", "No reason was specified")
								banMember.send(embed);
							}
						} else {
							message.channel.send(`Failed to ban member ${banMember}`);
						}
					} else if (msg1.first().content.toLowerCase() == "no") {
						message.channel.send("Banning aborted");
					}
				}
			})
			.catch(() => message.channel.send("No answer was provided within the 10 second window. aborting ban..."));
}

exports.help = {
    name: "ban",
    description: "The `ban` command requires `Ban Members` permission. It allows you to ban a specified user.",
    usage: "`yabe ban <@user>`",
}
