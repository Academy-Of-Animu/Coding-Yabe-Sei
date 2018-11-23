module.exports = (client, message) => {
    client.user.setActivity(`>help | ${client.guilds.size} servers`, { type: 'PLAYING' })
}