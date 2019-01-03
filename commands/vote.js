const Discord  = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (client, message, [timeS, ...votingthing]) => {
    try {

        
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command. Ask a moderator to lead the voting.")

        if(timeS == '' && votingthing == '') return message.reply("I can't deploy a vote with no parameters! Please use `yabe help vote` for more info on how to use this command!")
        if(votingthing == '') return message.reply("I can't deploy a vote with no parameters! Please use `yabe help vote` for more info on how to use this command!")

        if(isNaN(timeS)) {
            // timeS = 10000
            votingthing = timeS + ' ' + votingthing.join(' ')
            timeS = 60000
        } else {
            votingthing = votingthing.join(' ')
            timeS = parseInt(timeS) * 1000
        }

        if(timeS <= 5000 || timeS >= 180000) {
            message.reply('Please pick an appropriate amount of time for the vote to take (no less than 5 seconds and no more than three minutes)')
            return
        }

        // votingthing = votingthing.join(' ')

        let msg = await message.channel.send(`${votingthing}? Vote now! (${timeS / 1000} Seconds)`);
        await msg.react(agree);
        await msg.react(disagree);

        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: timeS});
        // msg.delete();

        var NO_Count = reactions.get(disagree).count;
        var YES_Count = reactions.get(agree);

        if(YES_Count == undefined){
            var YES_Count = 1;
        }else{
            var YES_Count = reactions.get(agree).count;
        }

        var sumsum = new Discord.RichEmbed()
        .setTitle(`${votingthing.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})}`)
                    .setDescription("----------------------------------------\n" +
                                                "Total votes (Yes): " + `${YES_Count-1}\n` +
                                                "Total votes (No): " + `${NO_Count-1}\n` +
                                                "----------------------------------------", true)
          .setColor(client.config.embedColor)

        await msg.edit("Voting finsished!", {embed: sumsum});
    } catch (err) {
        console.log(err)
    }
}

exports.help = {
    name: "vote",
    description: "The `vote` command takes a time and voting parameter and creates a vote out of it. This feature is in beta, so expect just a few bugs, it oughta mostly work though. This command requires `Kick Members` permission.",
    usage: "`yabe <seconds for vote to last> <vote message>`"
}
