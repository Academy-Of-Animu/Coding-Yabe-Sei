exports.run = (client, message, args) => {
    if (message.channel.id === '528717576357019648') return message.delete();
    try {
        let roleSearch = args.join(" ").toLowerCase();
        let roleToAdd = message.guild.roles.find(x => x.name.toLowerCase() === roleSearch);

        if (!roleSearch)
            return message.reply('Gimmie a role ya big silly');

        if (roleToAdd == undefined && roleSearch.match(/<|>/gm))
            roleToAdd = message.guild.roles.find(x => x.name.toLowerCase() === roleSearch.replace(/<|>/gm, ""));
        else if (roleToAdd == undefined)
            return message.reply(`Unfortunately that role, **${roleSearch}**, does not exist`);

        if (message.member.roles.has(roleToAdd.id))
            return message.reply('You already have that role!');

        message.member.addRole(`${roleToAdd.id}`).then(() => message.react(`✅`))
            .catch(error => {
                console.error;
                message.react('❎');
                if (error == "DiscordAPIError: Missing Permissions")
                    return message.reply(`You lack the power to gain a role as noble as ${roleToAdd}`);
                else
                    return message.reply(`Unexpected error | ${error}`);
            })

    } catch (err) {
        console.log(`There was an error adding a role: ${err}`);
    }
}
exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "addrole",
    description: "Allows yabe to give you the provided role",
    usage: "`yabe addrole <role\'s name>`",
}

// Improved by best waifu Zen
