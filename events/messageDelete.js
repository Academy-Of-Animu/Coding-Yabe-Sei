module.exports = (client, message) => {
    client.snipeMap.set(message.guild.id, message)
}
