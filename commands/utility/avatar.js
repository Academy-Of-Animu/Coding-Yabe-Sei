const Discord = require('discord.js');

exports.run = (client, message, args) => {
	try {
		var targetName = args.join(' ');

		if (targetName.includes('@'))
			target = message.mentions.users.first();
		else if (args.length > 0 && !targetName.includes('@')) {
			try {
				var target = message.guild.members.find(member => [member.displayName.toLowerCase(), member.user.username.toLowerCase()].includes(targetName.toLowerCase())).user;
			}
			catch (err) {
				// If the supplied name cannot be resolved, check for any discriminators and strip them incase of a "silent mention" used to autofill the target's name
				//We do the discriminator check after the name check fails, incase the target has a # in their name
				targetName = targetName.substring(0, targetName.indexOf('#'));
				var target = message.guild.members.find(member => [member.displayName.toLowerCase(), member.user.username.toLowerCase()].includes(targetName.toLowerCase())).user;
			}
		}
		else if (args.length == 0)
			var target = message.author;

		let embed = new Discord.RichEmbed()
			.setTitle(`**${target.username}'s** Avatar`)
			.setImage(target.displayAvatarURL)
			.setColor(client.config.embedColor);
		return message.channel.send(embed);

	} catch (err) {
		// If no user can be found, the error will be caught here
		//Check for perms incase yabe is no longer required to be an administrator in the future (@illusion luv u bby)
		if (target == null) {
			message.react('💤');
			message.channel.send(`❌ user \`${targetName}\` not found ❌`).then(respMessage => {
				if (message.guild.me.hasPermission("MANAGE_MESSAGES"))
					respMessage.delete(10000);
			});
		}
		else
			console.log(err);
	}
}

exports.help = {
	enabled: true,
	hideHelp: false,
	type: "util",
	name: "avatar",
	aliases: ["pfp", "profile"],
	description: "Display the **avatar** of the requested user - A **username**(not case-sensitive) or **mention** is accepted. | Use without any arguments to display your own avatar",
	usage: "`yabe avatar @target`",
}
