module.exports = (client, message) => {
    client.user.setActivity(`[BETA] >help | ${client.guilds.size} servers`, { type: 'PLAYING' })
}
