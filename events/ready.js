module.exports = (client) => {
    //const activitiesList = [`coding-yabe-sei.io`, `for ${client.users.size} users on ${client.guilds.size} servers`, `with the >help command`, `with the devs`]

    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    /*
    setInterval( function() {
        const index = Math.floor(Math.random() * (activitiesList -1) +1);
        client.user.setActivity(activitiesList[index]);
    }, 20000)
    */

    client.user.setActivity(`>help | ${client.guilds.size} servers`, { type: 'PLAYING' });
}
