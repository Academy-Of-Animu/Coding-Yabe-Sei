const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ((message.author.id == client.config.devs.canarado) || (message.author.id == client.config.devs.senpai) || (message.author.id == client.config.devs.illusion)) { //return message.channel.send('Nope.');

    const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }

    let devText = args.join(" ");

    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      //let outputText = `clean(evaled), {code:"xl"}`;

      let embed = new Discord.RichEmbed()
        .addField("Input :inbox_tray:", `\`\`\`${devText}\`\`\``)
        .addBlankField()
        .addField("Output :outbox_tray:", `\`\`\`${clean(evaled)}\`\`\``)
        .setColor(client.config.embedColor)

      message.channel.send(embed)

      //message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  } else {
    let evalList = ['NO EVAL 4 U', 'NO TOKEN 4 U', 'EVAL IS NOT 4 U', 'EVAL IS 4 DEVS', 'TRYING TO BREAK OUR BOT?', 'OOF', 'L337 H4x0r', 'OH NO, OUR TOKEN', 'OOF']
    let evalListR = evalList[Math.floor(Math.random() * evalList.length)]
    return message.channel.send('```js\n' + evalListR + '\n```');
  }
}

exports.help = {
  type: "owner",
  name: "eval",
  description: "Evaluates javascript code",
  usage: "`yabe eval <code to be evaled>`",
}
