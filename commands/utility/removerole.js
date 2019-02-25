exports.run = (client, message, args) => {
    try {
        let roleSearch = args.join(" ").toLowerCase();
        let roleToRemove = message.guild.roles.find(x => x.name.toLowerCase() === roleSearch);

        if (!roleSearch)
            return message.reply('Gimmie a role ya big silly');

        if (roleToRemove == undefined)
            return message.reply(`Unfortunately that role, **${roleSearch}**, does not exist`);

        if (!message.member.roles.has(roleToRemove.id))
            return message.reply("You don't have that role!");

        message.member.removeRole(`${roleToRemove.id}`).then(() => message.react(`✅`))
        .catch(error => {
            console.error;
            message.react('❎');
            if (error == "DiscordAPIError: Missing Permissions")
                return message.reply(`You lack the power to remove a role as noble as ${roleToRemove}`);
            else
                return message.reply(`Unexpected error | ${error}`);
        })
    } catch (err) {
        console.log(`There was a problem while removing the role: ${err}`);
    }
};

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "removerole",
    description: "Removes selected role from the user's roles",
    usage: "`yabe removerole <role's name>`"
};
