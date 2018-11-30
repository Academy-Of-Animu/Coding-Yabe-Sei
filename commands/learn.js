const Discord = require('discord.js');

exports.run = (client, message, args) => {
    /*
    const eclr = client.config.embedColor;

    if(args[0] === "langs") {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("The current list of langs is:", "`js(JavaScript)` `py(Python)` `rb(Ruby)` `c(C)` `cs(C#)` `cpp(C++)` `jv(Java)` `php(PHP)` `sql(SQL)`\n\nUse these in front of the `>learn` command to learn more.\n")
        .addField("Yabe also teaches general concepts!", "The list of concepts that Yabe can (currently) attempt to assist with is:\n`Machine Learning(ml)`")
        .setColor(eclr)

        message.channel.send(embed)
    } else
    if(args[0] === "js") {
        if(args[1] === "if") {
            let embed = new Discord.RichEmbed()
            //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
            .addField("If\/else if\/else statements in JavaScript", "```js\nif (condition1) {\n\tblock of code to be executed if condition1 is true\n} else if (condition2) {\n\tblock of code to be executed if the condition1 is false and condition2 is true\n} else {\n\tblock of code to be executed if the condition1 is false and condition2 is false\n}\n```")
            .setColor(eclr)

            message.channel.send(embed)
        } else
        if(args[1] === "fn") {
            let embed = new Discord.RichEmbed()
            //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
            .addField("Functions in JavaScript", "```js\nfunction name(parameter1, parameter2, parameter3) {\n\tcode to be executed\n}\n```")
            .setColor(eclr)

            message.channel.send(embed)
        } else
        if(args[1] === "var") {
            let embed = new Discord.RichEmbed()
            .addField("Variables in JavaScript", "```js\nvar x = 1;\nvar y = 1;\nvar z = x + y;\nconsole.log(z)\n\nOutput: 2\n```")
            .setColor(eclr)

            message.channel.send(embed)
        }
        else {
            let embed = new Discord.RichEmbed()
            .addField("JavaScript", "With JavaScript, you currently can learn about:\n\nIf\/else if\/else statements(`if`)\nFunctions(`fn`)\nVariables(`var`)\n\nAccess these learning modules with `>learn js <learning module>`")
            .setColor(eclr)

            message.channel.send(embed)
        }
    } else
    if(args[0] === "py") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "rb") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "c") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "cs") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "cpp") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "jv") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "php") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "sql") {
        message.channel.send("This learning module is coming soon! -Adam")
    } else
    if(args[0] === "ml") {
        message.channel.send("This learning module is coming soon! -Adam")
    }
    else {
        let embed = new Discord.RichEmbed()
        //.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField("Learning with Yabe-Sei!", "Yabe-Sei will try to assist people with learning how to code and become good programmers.")
        .addField("How to use?", "For starters, the command to initiate the learning mode for Yabe is `>learn`. You then add more arguments to that to learn more about specified things.")
        .addField("Examples", "The command to learn about an if statement in JavaScript would be `>learn js if`, or to learn about print statements in ruby, you would do `>learn rb print`.\n\nTo see what Yabe offers for each language, use `>learn <name of language>`\n\nUse `>learn langs` to view a list of languages.")
        .setColor(eclr)

        message.channel.send(embed)
    }
    */
   let embed = new Discord.RichEmbed()
   .setDescription('**Thank you for using Coding Yabe Sei\'s beta!**\nSadly, due to a heavy work load on the devs of Yabe *cough*, the learning feature of Yabe is not yet completed! You can expect a full release of Yabe in the near future, if you have any more questions please ask in our [Discord Server](https://discord.gg/Sc44knm). Thanks for giving us a chance, we hope you\'ll stick along.')
   .setColor(client.config.embedColor)

   message.channel.send(embed)
}

exports.help = {
    name: "learn",
    description: "Yabe-Sei will try to assist people with learning how to code and become good programmers.",
    usage: "For starters, the command to initiate the learning mode for Yabe is `yabe learn`. You then add more arguments to that to learn more about specified things.\n" +
            "**Examples:**\n" +
            "The command to learn about an if statement in JavaScript would be `yabe learn js if`, or to learn about print statements in ruby, you would do `yabe learn rb print`.\n\nTo see what Yabe offers for each language, use `yabe learn <name of language>`\n\nUse `yabe learn langs` to view a list of languages.",
}