exports.run = (client, message, args, tools) => {
  let userinp = parseInt(args[0], 10)

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You are not allowed to use this command.');

  if (isNaN(userinp)) return message.reply("Please supply a number of messages to delete.");

  if (userinp > 100 || userinp < 2) return message.reply('Please supply a number between 2 and 100 to delete.');

  message.channel.bulkDelete(userinp + 1).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(console.error);
}

exports.help = {
  type: "mod",
  name: "rem",
  description: "The `rem` command require the `Manage Messages` permission. It removes a given amount of message, to clean up chats.",
  usage: "`yabe rem <amount of messages to be removed>`",
}
