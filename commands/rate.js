exports.run = (client, message, args) => {

  let answers = [
    //Postive
    "💯", "Yes", "me likey", "👀", "😍😍", "he's cool yea", "she's cool yea", "uhhhh yes", "indede", "would bang", "my favorite", "pretty good", "music to my ears",
    "dreamy", "Cool", "at least it's not bad", "not the best but still good", "AMAZING", "dude, that's like, awesome", `${client.emojis.get("526555941953339397")}`,
    `they're cute ${client.emojis.get("526168268243730459")}`, "underrated",

    //Negative
    "how about no", "yeah no", "needs much improvement", "barely ok, in short it's shit", "💩 basically", "just horrible", "never ask me to rate that again", "overrated",
    "nobody wants to see that", "i disapprove", "i'm not allowed to say", "that's goodn't", "oh no", "very uhh, how do i say this without sounding rude", "might as well throw it away",
    `this makes me wanna ${client.emojis.get("501548936084062210")}`, `what!! ${client.emojis.get("506599287170400266")}`, `you better be joking ${client.emojis.get("500786036889223168")}`
  ];

  let answer = answers[Math.floor(Math.random() * answers.length)];

  if (args[0]) {
    message.channel.send(answer);
  } else {
    message.channel.send("Give me something to rate");
  }
}

exports.help = {
  name: "rate",
  description: "Rates whatever you input as argument based on her mood",
  usage: "`yabe rate <thing to rate>`"
}
