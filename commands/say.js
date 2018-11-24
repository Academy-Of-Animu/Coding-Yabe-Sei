exports.run = (client, message, args) => {
    if(message.member.hasPermission("MANAGE_GUILD")) {
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else {
        message.channel.send("Sorry, you lack permissions to use this command. ¯\\_(ツ)_/¯");
    }
}
