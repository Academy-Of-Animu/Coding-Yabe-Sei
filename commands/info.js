const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const version = client.config.botVersion;
    let embed = new Discord.RichEmbed()
    .setTitle("**Who is Coding Yabe Sei?**")
    .setDescription("Coding Yabe Sei (Yabe for short) is a Discord Bot created to allow people to have an easier intro into programming and learn the syntax of various languages easily. All while having fun talking with friends!")
    .addField("Created by:", "Adam(canarado) - the head developer for the learning mode of Yabe and the Yabe framework\n\nHesham(IllusionMan1212) - the bug fixer and co-developer of Yabe\n\nMarvin(MemeSenpai) - Images Command Creator/Lead(ICC) and co-developer of Yabe\n\nJoin our [Discord](https://discord.gg/bhZGHCm) to talk with the devs and give your thoughts on Yabe\n\n")
    .setTimestamp()
    .setFooter(`Version:  ${version} | Currently on ${client.guilds.size} servers with ${client.users.size} users.`)
    .setColor(client.config.embedColor)

    message.channel.send(embed)
}
