const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let sentence = args.join(' ')
    if(!sentence) return message.reply('I can\'t owo-fy an empty message! uwu')

    let newSentence = sentence.replace(/[lr]/g, 'w')
    newSentence = newSentence.replace(/[LR]/g, 'W')

    message.channel.send(newSentence)
}

exports.help = {
    name: "owofy",
    description: "The `owofy` command takes text and owofies it! Just try it out and you'll get the gist of it.",
    usage: "`yabe owofy <text to put through the owofication process>`"
}
