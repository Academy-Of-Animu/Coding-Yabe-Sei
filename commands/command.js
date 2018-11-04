const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const eclr = client.config.embedColor;

    if(args[0] === "say") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Say Command**", "The `>say` command is tied to the `Mods` role. It allows you to make the bot say what you want.")
        .addField("Usage", "`>say <what you want the bot to say>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "kick") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Kick Command**", "The `>kick` command is tied to the `Mods` role. It allows you to kick a specified user.")
        .addField("Usage", "`>kick <@user>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "ban") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Ban Command**", "The `>ban` command is tied to the `Mods` role. It allows you to ban a specified user.")
        .addField("Usage", "`>ban <@user>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "ping") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Ping Command**", "The `>ping` command returns the client's ping to the Discord API and the users ping to the client's host server.")
        .addField("Usage", "`>ping`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "serverinfo") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Ping Command**", "The `>serverinfo` command returns info about the current server, such as when it was created and the owner, etc.")
        .addField("Usage", "`>serverinfo`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "help") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Help Command**", "The `>help` command displays a help menu, which contains a list of commands and a way to find further help.")
        .addField("Usage", "`>help`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "command") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("**Command Command**", "The `>command` command lets you...wait, if you're using this command that would implicate you already know how to use it, I'm not gonna waste my time.")
        .addField("Usage", "`>command <command name>`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "learn") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
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
    }
    else {
        message.reply("Please specify a command if you actually want help...")
    }
}