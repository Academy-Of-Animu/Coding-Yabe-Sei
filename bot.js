const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const klaw = require("klaw");
const path = require("path");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.commands = new Enmap();
client.aliases = new Enmap();

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);

dbl.on('posted', () => {
  console.log('Server count has been posted');
})

dbl.on('error', err => {
 console.log(`${err}`);
})

const start = async () => {
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  klaw("./commands").on("data", (item) => {
    const cmdFile = path.parse(item.path);
    if (!cmdFile.ext || cmdFile.ext !== ".js") return;
    try {
      let props = require(`${cmdFile.dir}${path.sep}${cmdFile.name}${cmdFile.ext}`)
      console.log(`Loading Command: ${props.help.name}${" ".repeat(25 - props.help.name.length)}👌`);
      client.commands.set(props.help.name, props);
      if (props.help.aliases) props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    } catch (e) {
      return console.log(new Error(`FAIL: ${cmdFile.name}: ${e.stack}`));
    };
  });

  client.login(process.env.BOT_TOKEN);
}
start()
