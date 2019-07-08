exports.run = (client, message, args) => {
    const { config } = client;
    const canManageGuild = message.member.hasPermission("MANAGE_GUILD");
    const isDev = config.devIds.includes(message.author.id);

    if (canManageGuild || isDev) {
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else {
        message.channel.send("Sorry, you lack permissions to use this command. ¯\\_(ツ)_/¯");
    }
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "mod",
    name: "say",
    aliases: ["echo"],
    description: "The `say` command requires `Manage Server` permission. It allows you to make the bot say what you want.",
    usage: "`yabe say <what you want the bot to say>`",
}
