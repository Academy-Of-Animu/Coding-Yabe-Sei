const Discord = require("discord.js");
const request = require("request");

exports.run = (client, message, args) => {
    //This is a command purely for memes
    request("https://api-to.get-a.life/meme", function(error, response, body) {
    body = JSON.parse(body);
    imgURL = body.url;
    imgText = body.text;

    let emb = new Discord.RichEmbed();
    emb.description = imgText;
    emb.setColor(client.config.embedColor);
    emb.setImage(imgURL);

    message.channel.send(emb)
    })
}