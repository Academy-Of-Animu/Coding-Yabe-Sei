const packageJson = require('../package.json');

const Configuration = {
  prefix: "yabe ",
  devs: {
      canarado: "427491040468140043",
      illusion: "407351772575694879",
      senpai: "428678912558628865"
  },
  devIds: [],
  useNewHelp: "true",
  embedColor: "0x1355A4",
  botVersion: packageJson.version,
  logChannel: "516054347008966667"
};

Configuration.devIds = Object.values(Configuration.devs);

module.exports = Configuration;