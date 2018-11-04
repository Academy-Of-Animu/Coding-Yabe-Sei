const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("**Who is Coding Yabe Sei?**")
    .setDescription("Coding Yabe Sei (Yabe for short) is a Discord Bot created to allow people to have an easier intro into programming and learn the syntax of various languages easily, all while having fun talking with friends!")
    .addField("Created by:", "Adam(canarado) - the head developer for the learning mode of Yabe and the Yabe framework\n\nHesham(IllusionMan) - the bug fixer and co-developer of Yabe\n\nMarvin(MemeSenpai) - co-developer of Yabe\n\nJoin our [Discord](https://discord.gg/Sc44knm) to talk with the devs and give your thoughts on Yabe\n")
    .setTimestamp()
    .setColor(client.config.embedColor)

    message.channel.send(embed)
}