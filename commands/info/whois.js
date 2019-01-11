const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let roles = message.guild.roles;
  let roleKeys = roles.keyArray();

  var sendEmbed = (name, role) => {
    let memberNames = [];
    let roleMembers = [];

    let roleKeys = role.keyArray()
    for (key of roleKeys) {
      memberNames.push(role.get(key))
    };

    let emb = new Discord.RichEmbed();

    //emb.description = "Who is..." + name;
    emb.setColor(client.config.embedColor);

    let memberUsers = ""
    if (memberNames.length > 50) {
      let embed = new Discord.RichEmbed()
        .setDescription(`Too many users to display: ${memberNames.length} users.`)
        .setColor(client.config.embedColor)

      message.channel.send(embed)
      return
    } //return message.channel.send(`Too many users to display: ${memberNames.length} users`)
    for (member of memberNames) {
      memberUsers += member.user.username + "\n"
    };

    emb.addField(`Who is ${name}`, memberUsers);
    message.channel.send(emb);
  };

  for (key of roleKeys) {
    let role = roles.get(key);
    let name = role.name;
    let argS = args.join(' ');
    if (name == argS) {
      sendEmbed(name, role.members);
      return;
    }
  }
}

exports.help = {
  enabled: true,
  hideHelp: false,
  type: "info",
  name: "whois",
  description: "The `whois` command displays a list of all people with a requested role.",
  usage: "`yabe whois <name of role>",
}
