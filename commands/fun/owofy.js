const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let sentence = args.join(' ');
    if (!sentence) return message.reply('I can\'t owo-fy an empty message! uwu');

    let newSentence = sentence.replace(/[lr]/g, 'w');
      newSentence = newSentence.replace(/(?:r|l)/g, "w");
      newSentence = newSentence.replace(/(?:R|L)/g, "W");
      newSentence = newSentence.replace(/n([aeiou])/g, 'ny$1');
      newSentence = newSentence.replace(/N([aeiou])/g, 'Ny$1');
      newSentence = newSentence.replace(/N([AEIOU])/g, 'NY$1');
      newSentence = newSentence.replace(/ove/g, "uv");
      newSentence = newSentence.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");
    // fuck you this is now finished
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
