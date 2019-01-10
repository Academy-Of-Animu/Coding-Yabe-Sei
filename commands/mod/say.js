exports.run = (client, message, args) => {
  if (message.member.hasPermission("MANAGE_GUILD") || message.author.id == client.config.devs.canarado || message.author.id == client.config.devs.senpai || message.author.id == client.config.devs.illusion) {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else {
    message.channel.send("Sorry, you lack permissions to use this command. ¯\\_(ツ)_/¯");
  }
}

exports.help = {
  type: "mod",
  name: "say",
  description: "The `say` command requires `Manage Server` permission. It allows you to make the bot say what you want.",
  usage: "`yabe say <what you want the bot to say>`",
}
