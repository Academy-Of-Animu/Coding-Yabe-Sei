const Discord = require('discord.js');

module.exports = async (client) => {
    const { config } = client;
    //const activitiesList = [`coding-yabe-sei.io`, `for ${client.users.size} users on ${client.guilds.size} servers`, `with the >help command`, `with the devs`]
    await client.wait(2000);
    // Discords API can take upt to 2-5 seconds to be fully ready. This makes sure the bot doesn't fo any of the following code before that.
    // - Darko

    // You can use this for limitations or fetching the app data in an easy way.
    // - Also Darko
    client.appInfo = await client.fetchApplication();
    setInterval(async () => {
        client.appInfo = await client.fetchApplication();
    }, 60000);

    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    /*
    setInterval( function() {
        const index = Math.floor(Math.random() * (activitiesList -1) +1);
        client.user.setActivity(activitiesList[index]);
    }, 20000)
    */

    client.user.setActivity(`yabe help | ${client.guilds.size} servers`, { type: 'PLAYING' });

    const cuties = ['Teehee owo', 'uwu', 'OwO', '\*owo\* notices bulgy wulgy', 'Lovies you papas!~', 'Nyaa! ฅ(＾・ω・＾ฅ)'];
    const cutiesR = cuties[Math.floor(Math.random() * cuties.length)];

    let embed = new Discord.RichEmbed()
        .setTitle('I just restarted dads!')
        .setTimestamp()
        .setFooter(cutiesR)
        .setColor(config.embedColor);

    const channelId = config.logChannel;
    try {
        const channel = await client.channels.get(channelId);
        channel.send(embed);
    }
    catch(e) {
        console.error(`Unable to find channel: ${channelId}`)
    }
};
