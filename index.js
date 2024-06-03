const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env['token'],
  prefix: ".",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "2411e10f692e23a1704cc9cb795c5f4d",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")