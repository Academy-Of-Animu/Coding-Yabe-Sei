const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let roles = message.guild.roles.filter(y => y.name !== '@everyone').array().sort()

    let rolesDel = roles.join(' ')
    let rolesStr = rolesDel.toString()

    let embed = new Discord.RichEmbed()
    .setColor(client.config.embedColor)
    .setTitle(`These are the ${roles.length} roles for ` + message.guild.name + '\n')
    .setDescription(rolesStr)
    .addField('Add roles with Yabe with `yabe addrole <role name>`', 'Note: roles higher than Yabe\'s may not be added, so keep all admin roles above Yabe\'s role and all addable roles below Yabe\'s role')
    .setTimestamp()

    message.channel.send(embed)
    console.log(roles.length)
}

exports.help = {
    name: "roles",
    description: "The `roles` command displays all roles for the server.",
    usage: "`yabe roles`"
}