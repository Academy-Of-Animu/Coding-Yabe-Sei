const request = require("request");
const Discord = require("discord.js");

exports.run = (client, message) => {

    const options = {
        url: "https://api.imgur.com/3/album/NXyuO/images",
        method: "GET",
        headers: {
            "Authorization": `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        }
    };

    request(options, (error, response, body) => {
        if (error)
            console.log(error);

        try { //better to be safe than sorry
            let image = JSON.parse(body);
            let embed = new Discord.RichEmbed()
            .setColor(client.config.embedColor)
            .setImage(image.data[Math.floor(Math.random() * image.data.length)].link);
            message.channel.send(embed);
        }
        catch (err) {
            console.log(err);
            message.channel.send("An error occured while getting your smug, try again and if the problem persists make a bug report using `yabe bug <bug report>`");
        }
    });
}

exports.help = {
    name: "smug",
    description: "Posts a random picture of a smug anime girl",
    usage: "`yabe smug`"
}
