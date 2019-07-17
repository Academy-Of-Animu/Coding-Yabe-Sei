module.exports = (client, message) => {
    if (message.author.bot) return;

    const prefix = `${client.config.prefix} `;
    if (!message.content.toLowerCase().includes(prefix)) return;
    else {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.has(command) ? client.commands.get(command) : (client.aliases.has(command) ? client.aliases.get(command) : null);

        if (!cmd) return;

        cmd.run(client, message, args);
    }
};
