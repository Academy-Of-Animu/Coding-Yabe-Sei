const Discord = require("discord.js");
const DEX = require("../../Pokemon/PokeDex.json");
const MOVES = require("../../Pokemon/PokeMoves.json");

exports.run = (client, message, args) => {
	if (!args) { return; } else if (!args[1] && args[0] != "subcmds") { return; }

	if (args[0] == "subcmds") {
		let emb = new Discord.RichEmbed();

		emb.setColor(client.config.embedColor);
		emb.addField("Pokemon Sub Commands:", "`subcmds`, `dex`, `move`");

		message.channel.send(emb);
		return;
	}

	if (args[0] == "dex") {
		pkmn = DEX.filter(poke => poke.id == args[1])[0];
		if (pkmn == undefined) {
			pkmn = DEX.filter(poke => poke.name.toLowerCase() == args[1].toLowerCase())[0];
		}
		if (pkmn == undefined) { message.channel.send("Sorry, I couldn't find that one."); return; }

		pkB = pkmn.base;

		let pokeEmbed = new Discord.RichEmbed();
		pokeEmbed.title = pkmn.name + " #" + pkmn.id;
		pokeEmbed.description = pkmn.info[Math.floor(Math.random() * pkmn.info.length)];
		pokeEmbed.setImage("https://" + pkmn.img);
		pokeEmbed.setColor(client.config.embedColor);
		pokeEmbed.addField("Base:",
			"HP: " + pkB.hp +
			"\nAttack: " + pkB.attack +
			"\nDefense: " + pkB.defense +
			"\nSpAttack: " + pkB.spAttack +
			"\nSpDefense: " + pkB.spDefense, true);
		pokeEmbed.addField("Type(s):", pkmn.type.join(", "), true);

		message.channel.send(pokeEmbed);
	}

	if (args[0] == "move") {
		move = MOVES.filter(m => m.name.toLowerCase() == args.slice(1, args.length).join(" "))[0];
		if (move == undefined) {
			move = MOVES.filter(m => m.no == args[1])[0];
		}
		if (move == undefined) { message.channel.send("Sorry, I couldn't find that move!"); return; }

		let moveEmb = new Discord.RichEmbed();
		moveEmb.title = move.name + " #" + move.no;
		moveEmb.addField("Type:", move.type);
		moveEmb.addField("Category:", move.category);
		moveEmb.addField("Contest:", move.contest);
		moveEmb.addField("PP:", move.pp);
		moveEmb.addField("Power:", move.power);
		moveEmb.addField("Accuracy:", move.accuracy);
		moveEmb.addField("Generation:", move.generation);
		moveEmb.setColor(client.config.embedColor);

		message.channel.send(moveEmb);
	}
}

exports.help = {
	enabled: true,
	hideHelp: false,
	type: "info",
	name: "pkmn",
	aliases: ["pokemon"],
	description: "The `pkmn` module contains commands that let you look up a pokemon or pokemon move. More commands for this module will come out in the future.",
	usage: "`yabe pkmn subcmds` for a list of subcommands"
}
