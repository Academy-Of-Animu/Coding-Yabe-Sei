const Discord = require("discord.js");
const request = require("request");

exports.run = (client, message, args) => {
    try {
    //This is a command purely for memes
    request("https://api-to.get-a.life/meme", function (error, response, body) {
        if(error) return message.channel.send('Sorry, it appears an error has occurred fetching your meme!').then(() => console.error(error.message))
        
        body = JSON.parse(body);
        imgURL = body.url;
        imgText = body.text;

        const emb = new Discord.RichEmbed();
            emb.setDescription = imgText;
            emb.setColor(client.config.embedColor);
            emb.setImage(imgURL);

        message.channel.send(emb);
    })
    } catch (e) {
        console.error(e.message)
    }
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "image",
    name: "meme",
    description: "The `meme` command displays a random meme from the interwebs.",
    usage: "`yabe meme`",
}
