exports.run = (client, message, args) => {
    let roleSearch = args.join(" ")
    let roleToAdd = message.guild.roles.find(x => x.name === roleSearch)

    message.member.addRole(`${roleToAdd.id}`).then(() => message.react(`✅`)).catch(console.error)

    setTimeout( () => {
        message.delete();
    }, 5000 )
}