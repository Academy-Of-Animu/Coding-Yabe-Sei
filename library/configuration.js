require('dotenv').config();
const packageJson = require('../package.json');

const Configuration = {
  botToken: process.env.BOT_TOKEN,
  production: process.env.PRODUCTION,
  dblToken: process.env.DBL_TOKEN,
  imgurClientId: process.env.IMGUR_CLIENT_ID,
  osuToken: process.env.OSU_TOKEN,

  prefix: process.env.PREFIX || 'yabe',
  devs: {
      canarado: '427491040468140043',
      illusion: '407351772575694879',
      senpai: '428678912558628865'
  },
  devIds: [], // IDE Autocomplete Placeholder for Generated Property
  useNewHelp: process.env.USE_NEW_HELP || 'true',
  embedColor: process.env.EMBED_COLOR || '0x1355A4',
  botVersion: packageJson.version,
  logChannel: process.env.LOG_CHANNEL || '516054347008966667',
  disconnectChannel: process.env.DISCONNECT_CHANNEL || '531654018909339650',
  bugChannel: process.env.BUG_CHANNEL || '533714573031899156'
};

// Generated Properties
Configuration.devIds = Object.values(Configuration.devs);

module.exports = Configuration;
