module.exports = (client, member) => {
    let homeserver1 = '516045677495582743'; //support server
    let homeserver2 = '501540132252286978';
    let welcomechannel1 = '516049633622097931'; //support server
    let welcomechannel2 = '501540376998576139';

    if (member.guild.id === homeserver2) member.guild.channels.get(welcomechannel2).send(`**${member.user.username}**, has left the server! RAWR OWO`);
}