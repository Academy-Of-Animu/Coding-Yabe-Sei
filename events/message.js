module.exports = (client, message) => {
    if (message.author.bot) return;

    if (!message.content.toLowerCase().includes(client.config.prefix)) return;
    else {
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.has(command) ? client.commands.get(command) : (client.aliases.has(command) ? client.aliases.get(command) : null);

        if (!cmd) return;

        cmd.run(client, message, args);
    }
};
