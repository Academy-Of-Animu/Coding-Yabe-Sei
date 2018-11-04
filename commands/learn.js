const Discord = require('discord.js');

exports.run = (client, message, args) => {
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
        if(args[1] === "syn") {
            let embed = new Discord.RichEmbed()
            .setTitle("JavaScript Syntax")
            .addField()
        }
        else {
            let embed = new Discord.RichEmbed()
            .addField("JavaScript", "With JavaScript, you currently can learn about:\n\nIf\/else if\/else statements(`if`)\nFunctions(`fn`)\n\nAccess these learning modules with `>learn js <learning module>`")
            .setColor(eclr)

            message.channel.send(embed)
        }
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
}