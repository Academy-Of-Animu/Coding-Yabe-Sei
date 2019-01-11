exports.run = (client, message, args) => {

  let answers = [
    //Postive
    "this is it chief", "can i get an amen", "OwO", "UwU", "Indede, it is so", "yeet", "yes", `YES!! ${client.emojis.get("501548935857438730")}`, "that's absolutely correct",
    "i agree", "heeyy we have something in common", "Yeah, why not", "Only if you say please",

    //Maybe??
    "ask canny", "i guess??", "with the way things are, who knows", "¯\\_(ツ)_/¯", "not enough info", "i don't want to answer that", `how would i know that huh ${client.emojis.get("513052403768098844")}`,
    "you might wanna reconsider your life choices", "how about you watch anime instead", "Maybe", "if you pray hard enough",

    //Negative
    "this is not it chief", "that's a no from me chief", "leave me alone, i'm tired", "turn the gay down a notch and i'll answer ya", `u serious ${client.emojis.get("492785060869832706")}`,
    "how about you shut up", "simply put, no", "not gonna happen", "i dont think so", "ask again in 5 minutes",
  ];

  let answer = answers[Math.floor(Math.random() * answers.length)];

  if (args[0]) {
    message.channel.send(answer);
  } else {
    message.channel.send("Give me a question to predict the answer for!");
  }
}

exports.help = {
  enabled: true,
  hideHelp: false,
  type: "fun",
  name: "8ball",
  description: "Gives a totally ~~random~~ calculated answer to your question",
  usage: "`yabe 8ball <question or whatever you want really>`"
}
