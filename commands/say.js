exports.run = (client, message, args) => {
    if(message.member.roles.find(x => x.name === "Mods")) {
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else {
        message.channel.send("Sorry, you can't use this command. Either the `Mods` role does not exist or you are not a Mod ¯\\_(ツ)_/¯");
    }
}
