const Discord = require('discord.js')

module.exports = (client) => {
    //const activitiesList = [`coding-yabe-sei.io`, `for ${client.users.size} users on ${client.guilds.size} servers`, `with the >help command`, `with the devs`]

    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    /*
    setInterval( function() {
        const index = Math.floor(Math.random() * (activitiesList -1) +1);
        client.user.setActivity(activitiesList[index]);
    }, 20000)
    */

    client.user.setActivity(`yabe help | ${client.guilds.size} servers`, { type: 'PLAYING' });
    
    const cuties = ['Teehee owo', 'uwu', 'OwO', '\*owo\* notices bulgy wulgy', 'Lovies you papas!~', 'Nyaa! ฅ(＾・ω・＾ฅ)']
    const cutiesR = cuties[Math.floor(Math.random() * cuties.length)]
    
    let embed = new Discord.RichEmbed()
    .setTitle('I just restarted dads!')
    .setTimestamp()
    .setFooter('Teehee owo')
    .setColor(client.config.embedColor)

    client.channels.get('531644078673100830').send(embed)
}
