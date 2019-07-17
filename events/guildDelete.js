const Discord = require('discord.js');

module.exports = (client, guild) => {
    client.user.setActivity(`yabe help | ${client.guilds.size} servers`, { type: 'PLAYING' });

    let logChannel = client.config.logChannel;

    const embed = new Discord.RichEmbed()
        .setColor(client.config.embedColor)
        .setTitle(`Just __left__ ${guild.name}`)
        .setDescription(`**${guild.owner.user.username}#${guild.owner.user.discriminator}** is the owner of the guild.\nGuild has **${guild.members.size}** members.\n\n`)
        .setTimestamp();

    client.channels.get(logChannel).send(embed)
        .catch(console.error);
}
