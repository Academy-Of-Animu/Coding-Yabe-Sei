const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
    let url = 'https://random.dog/woof.json';
    try {
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                message.channel.send(body.url);
                console.log(body.url);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "image",
    name: "dog",
    aliases: ["doggo", "doge"],
    description: "The `dog` command sends a random doggo!",
    usage: "`yabe dog`",
}
