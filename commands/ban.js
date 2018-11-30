exports.run = (client, message) => {
    message.channel.send("This command is coming soon!")
}

exports.help = {
    name: "ban",
    description: "The `ban` command requires `Ban Members` permission. It allows you to ban a specified user.",
    usage: "`yabe ban <@user>`",
}