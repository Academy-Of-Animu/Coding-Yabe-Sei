module.exports = (client, member) => {
    let homeserver1 = '516045677495582743'; //support server
    let homeserver2 = '501540132252286978';
    let welcomechannel1 = '516049633622097931'; //support server
    let welcomechannel2 = '501540376998576139';

    if (member.guild.id === homeserver1) member.guild.channels.get(welcomechannel1).send(`Hi, ${member.user.username}. Thank you for joining the Coding Yabe Sei Support Server!\nIf you have any questions ask them in <#516129860599414784> and if you have any suggestions, tell them in <#516053950273683485>.`);
    else if (member.guild.id === homeserver2) member.guild.channels.get(welcomechannel2).send(`**${member.user.username}**, has joined OwO!\nWecome to da servwer, pwease wead <#501549580756713472> uwu\nAlso pwease introduce yoursewf in <#501540132781031437> u.u`);
}
