const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (args[0]) {
        let command = client.commands.has(args[0]) ? client.commands.get(args[0]) : (client.aliases.has(args[0]) ? client.aliases.get(args[0]) : null);
        if (!command) return;
        const embed = new Discord.RichEmbed()
            .addField(`**${command.help.name.toProperCase()} Command**`, command.help.description)
            .addField('Usage', command.help.usage)
            .setColor(client.config.embedColor);
        if (command.help.aliases) {
            if (command.help.aliases.length > 0) embed.addField(`Aliases`, `\`${command.help.aliases.join(", ")}\``);
        }

        message.channel.send(embed);
    } else {
        if (client.config.useNewHelp == "true") {
            var cats = new Map();

            client.commands.forEach(c => {
                if (c.help.enabled == true && c.help.hideHelp == false) {
                    let n = c.help.type.toProperCase();
                    if (!cats.has(n)) {
                        cats.set(n, {
                            name: n,
                            array: []
                        });
                    };
                    cats.get(n).array.push(`\`${c.help.name}\``);
                }
            });

            var embed = new Discord.RichEmbed();
            embed.setTitle(`Commands Info`);
            embed.setDescription(`Use \`yabe help commandname\` to view help on a command. To see changelogs use \`yabe changlog\`. For additional help with a command, type \`yabe help <command name>\`.\nThank you for using the Yabe beta bot! We hope you will stick with us!`);
            cats.forEach(cat => {
                embed.addField(`**${cat.name}**`, cat.array.join(", "));
            });
            embed.setColor(client.config.embedColor);
            embed.setTimestamp();
            embed.setThumbnail(client.user.displayAvatarURL);
            embed.setFooter(`Created by Adam, Hesham and Marvin`);
            message.channel.send(embed).catch((e) => {
                message.channel.send(`Something went wrong! Tell a dev or try again.`);
                console.error(e);
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
                .setTimestamp();

            message.channel.send(embed);
        }
    }
};

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "help",
    aliases: ["halp", "commands", "cmds", "h"],
    description: "The `help` command displays a help menu, which contains a list of commands and a way to find further help.",
    usage: "`yabe help`"
};
