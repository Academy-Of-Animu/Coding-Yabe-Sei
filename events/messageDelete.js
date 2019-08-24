module.exports = (client, message) => {

    let image = message.attachments.size > 0 ? extension(message.attachments.array()[0].proxyURL) : false

    message.content.replace('\n', '')

    if(message.content.length > 200) {
        message.content = message.content.slice(0, 200) + ' ...'
    }

    let snipe = client.snipeMap.get(message.guild.id)

    if(!snipe) {
        client.snipeMap.set(message.guild.id, [[message, image]])
    } else {
        if(snipe.length >= 5) {
            client.snipeMap.get(message.guild.id).pop()
            client.snipeMap.get(message.guild.id).unshift([message, image])
        } else {
            client.snipeMap.get(message.guild.id).unshift([message, image])
        }
    }



    function extension(attachment) {
        const imageLink = attachment.split('.')
        const typeOfImage = imageLink[imageLink.length - 1]
        const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage)
        if(!image) return ''
        return attachment
    }
}
