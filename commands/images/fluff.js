const Discord = require("discord.js");
const request = require("request");

const descs = ["A big cutie!", "A small cutie!", "OwO whats this?", "UwU so adorable...", "Literally shooketh", "if (this.isCute){die()}"];

exports.run = (client, message, _args) => {
    const baseUrl = "https://some-random-api.ml/img/";
    const avail = ["dog", "cat", "panda", "red_panda", "birb", "fox", "koala", "racoon", "kangaroo", "pikachuimg"];
    const anim = avail.random();

    request(baseUrl + anim, function (error, _response, body) {
        if (error) {
            message.channel.send("Sorry something seems to have gone wrong!");
            console.log(error);
            return;
        }

        body = JSON.parse(body);
        const imgURL = body.link;

        const emb = new Discord.RichEmbed();
            emb.setDescription = descs.random();
            emb.setColor(client.config.embedColor);
            emb.setImage(imgURL);

        message.channel.send(emb);
    })
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "image",
    name: "fluff",
    description: "The `fluff` command sends a random cute animal!",
    usage: "`yabe fluff`",
}
