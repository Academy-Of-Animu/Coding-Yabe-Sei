module.exports = (client, message) => {
    if(message && message.attachments && message.attachments.length > 0) return

    if(message.content.length > 200) {
        message.content = message.content.slice(0, 200) + ' ...'
    }

    let snipe = client.snipeMap.get(message.guild.id)

    if(!snipe) {
        client.snipeMap.set(message.guild.id, [message])
    } else {
        if(snipe.length >= 5) {
            client.snipeMap.get(message.guild.id).pop()
            client.snipeMap.get(message.guild.id).unshift(message)
        } else {
            client.snipeMap.get(message.guild.id).unshift(message)
        }
    }
}
