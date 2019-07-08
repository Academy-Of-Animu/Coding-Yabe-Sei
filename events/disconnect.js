const Discord = require('discord.js');

module.exports = (client) => {
    const { config } = client;
    const helps = [
        '(๑◕︵◕๑) Dads, HELP ME',
        'I\'m so scared right now (╯︵╰,)',
        'I need to be manually put back UP PLS-DESU UWU',
        'Something made a fucky wucky~', '（┬┬＿┬┬）'
    ];
    const helpsR = helps[Math.floor(Math.random() * helps.length)];

    let embed = new Discord.RichEmbed()
        .setTitle(helpsR)
        .setTimestamp()
        .setFooter('Whoever is seeing this, please check the heroku, thx')
        .setColor(client.config.embedColor);

    client.channels
        .get(config.disconnectChannel)
        .send(embed)
        .catch(console.error);;
}
