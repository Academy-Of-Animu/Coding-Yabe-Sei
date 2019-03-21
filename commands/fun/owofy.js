const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let sentence = args.join(' ');
    if (!sentence) return message.reply('I can\'t owo-fy an empty message! uwu');

    let newSentence = sentence.replace(/[lr]/g, 'w');
    newSentence = newSentence.replace(/[LR]/g, 'W');
    newSentence = newSentence.replace(/(te)/g, 'twe');
    newSentence = newSentence.replace(/(Te)/g, 'Twe');
    newSentence = newSentence.replace(/(no)/g, 'nyo');
    newSentence = newSentence.replace(/(No)/g, 'Nyo');
    newSentence = newSentence.replace(/(ne)/g, 'nye');
    newSentence = newSentence.replace(/(Ne)/g, 'Nye');
    newSentence = newSentence.replace(/(love)/g, 'wuv');
    newSentence = newSentence.replace(/(Love)/g, 'Wuv');
    //more work needs to be done on this *i'm looking at you canny*
    message.channel.send(newSentence);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "fun",
    name: "owofy",
    description: "The `owofy` command takes text and owofies it! Just try it out and you'll get the gist of it.",
    usage: "`yabe owofy <text to put through the owofication process>`"
}
