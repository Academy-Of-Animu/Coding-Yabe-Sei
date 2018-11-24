const Discord = require("discord.js");
const request = require("request");

descs = ["A big cutie!", "A small cutie!", "OwO whats this?", "UwU so adorable...", "Literally shooketh", "if (this.isCute){die()}", ]

exports.run = (client, message, args) => {
  var url = "https://api-to.get-a.life/"
  avail = ["dog", "cat", "panda", "redpanda", "birb", "fox"]
  anim = avail[Math.floor(Math.random() * avail.length)]

  request(url + anim + "img", function (error, response, body){
    body = JSON.parse(body);
    imgURL = body.link;

    let emb = new Discord.RichEmbed();
    emb.description = descs[Math.floor(Math.random() * avail.length)];
    emb.setColor(client.config.embedColor);
    emb.setImage(imgURL);

    message.channel.send(emb)
  })

}
