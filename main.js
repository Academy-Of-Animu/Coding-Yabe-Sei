//This is the basic command handler with included file examples. Ill work on it more a little later or tomorrow...its just placeholder for rn
//-canarado uwu

const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login("token");

///////////////////////////////////////////////////////////

//Message Event!

module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
  };

/////////////////////////////////////////////////////////

//Ping example command. Commands follow file name!

exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}

//////////////////////////////////////////////////////////

//Slightly more complex the kick command, again...follows file name!

exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Mods");
    if (!modRole)
      return console.log("The Mods role does not exist");
  
    if (!message.member.roles.has(modRole.id))
      return message.reply("You can't use this command.");
  
    if (message.mentions.members.size === 0)
      return message.reply("Please mention a user to kick");
  
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
    });
  };

//////////////////////////////////////////////////////////////////

//The ready event! Module in place of client.on("ready") event

module.exports = (client) => {
console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}

///////////////////////////////////////////////////////////////

//guildMemberAdd event replacement u.u

module.exports = (client, member) => {
const defaultChannel = member.guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}

//////////////////////////////////////////////////////////////////////////

//reload to get rid of cache, commands cache without reboot, so we have to do it manually if they are changed! [might not be needed on hosting]

exports.run = (client, message, args) => {
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
  };

///////////////////////////////////////////////////////////////
