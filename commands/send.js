exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, you lack permissions to use this command. ¯\\_(ツ)_/¯")

  let contSend = args.splice(1).join(' ')

  let chanSendFind = message.mentions.channels.first() ? message.mentions.channels.first().id : false

  if (chanSendFind === false) return message.reply('you need to specify a channel to send this message in. `yabe send #<channel_name> <content>`')
  if (!contSend) return message.reply('I can\'t send an empty message.')

  client.channels.get(chanSendFind).send(contSend)
    .then(() => message.react(`✅`))
    .catch(console.error)
}

exports.help = {
  name: "send",
  description: "The `send` command  requires `Manage Server` permission. Use it to send a command to a specific channel, as specified.",
  usage: "`yabe send #<channel> <content of the message>`"
}
