const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let eclr = client.config.embedColor;
    if(args[0] === "say") {
        let embed = new Discord.RichEmbed()
        .addField("**Say Command**", "The `>say` command requires `Manage Server` permission. It allows you to make the bot say what you want.")
        .addField("Usage", "`>say <what you want the bot to say>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "kick") {
        let embed = new Discord.RichEmbed()
        .addField("**Kick Command**", "The `>kick` command requires `Kick Members` permission. It allows you to kick a specified user.")
        .addField("Usage", "`>kick <@user> <reason>(optional)`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "ban") {
        let embed = new Discord.RichEmbed()
        .addField("**Ban Command**", "The `>ban` command requires `Ban Members` permission. It allows you to ban a specified user.")
        .addField("Usage", "`>ban <@user>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "ping") {
        let embed = new Discord.RichEmbed()
        .addField("**Ping Command**", "The `>ping` command returns the client's ping to the Discord API and the users ping to the client's host server.")
        .addField("Usage", "`>ping`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "serverinfo") {
        let embed = new Discord.RichEmbed()
        .addField("**Ping Command**", "The `>serverinfo` command returns info about the current server, such as when it was created and the owner, etc.")
        .addField("Usage", "`>serverinfo`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "help") {
        let embed = new Discord.RichEmbed()
        .addField("**Help Command**", "The `>help` command displays a help menu, which contains a list of commands and a way to find further help.")
        .addField("Usage", "`>help`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "learn") {
        let embed = new Discord.RichEmbed()
        .addField("Learning with Yabe-Sei!", "Yabe-Sei will try to assist people with learning how to code and become good programmers.")
        .addField("How to use?", "For starters, the command to initiate the learning mode for Yabe is `>learn`. You then add more arguments to that to learn more about specified things.")
        .addField("Examples", "The command to learn about an if statement in JavaScript would be `>learn js if`, or to learn about print statements in ruby, you would do `>learn rb print`.\n\nTo see what Yabe offers for each language, use `>learn <name of language>`\n\nUse `>learn langs` to view a list of languages.")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "info") {
        let embed = new Discord.RichEmbed()
        .addField("**Info Command**", "The `>info` command displays info about Yabe Sei, and the creators of Yabe.")
        .addField("Usage", "`>info`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "bug") {
        let embed = new Discord.RichEmbed()
        .addField("**Bug Command**", "The `>bug` command allows the user to send a bug receipt to the developers of the bot.")
        .addField("Usage", "`>bug <bug message>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "meme") {
        let embed = new Discord.RichEmbed()
        .addField("**Meme Command**", "The `>meme` command displays a random meme from the interwebs.")
        .addField("Usage", "`>meme`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "invite") {
        let embed = new Discord.RichEmbed()
        .addField('**Invite Command**', 'The `>invite` command sends an instant invite for Yabe straight to your own server(s).')
        .addField("Usage", "`>invite`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "whois") {
        let embed = new Discord.RichEmbed()
        .addField("**Whois Command**", "The `>whois` command displays a list of all people with a requested role.")
        .addField("Usage", "`>whois <name of role>")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "rem") {
        let embed = new Discord.RichEmbed()
        .addField('**Rem Command**', 'The `>rem` command require the `Manage Messages` permission. It removes a given amount of message, to clean up chats.')
        .addField('Usage', '`>rem <amount of messages to be removed>`')
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "avatar") {
        let embed = new Discord.RichEmbed()
        .addField("**Avatar Command**", "The `>avatar` command sends the specified user's profile avatar on Discord. Leave empty to get your own avatar.")
        .addField("Usage", "`>avatar <desired user(without @)/leave blank for own>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "poke") {
        let embed = new Discord.RichEmbed()
        .addField('**Poke Command**', 'The `>poke` command allows you to poke your friends!')
        .addField('Usage', '`>poke <person to poke>`')
        .setColor(eclr)

        message.channel.send(embed)
    }else
    if(args[0] === "slap") {
        let embed = new Discord.RichEmbed()
        .addField('**Slap Command**', 'The `>slap` command allows you to slap your friends to show your disdain for them! \:)')
        .addField('Usage', '`>slap <person to slap>`')
        .setColor(eclr)

        message.channel.send(embed)
    }
    else {
    let embed = new Discord.RichEmbed()
    //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .addField("**Commands**", "List of all available commands\nFor additional help with a command, type `>help <command name>`\nThank you for using the Yabe beta bot! We hope you will stick with us!")
    .addField("**Moderation** *`each require certain perms`*", "`say` `kick` `ban` `rem`")
    .setColor(eclr)
    .addField("**Fun**", "`meme` `poke` `slap`")
    .addField("**Games**", "`placeholder`")
    .addField("**Learning**", "`>learn` to learn more! [coming soon, I promise]")
    .addField("**Random**", "`ping` `help` `serverinfo` `info` `bug` `invite` `whois` `avatar`\n\n\n")
    .setTimestamp()
    .setFooter("Created by Adam, Hesham and Marvin")

    message.channel.send(embed)
    }
}
