exports.run = (client, message, args) => {
    let roleSearch = args.join(" ")
    let roleToAdd = message.guild.roles.find(x => x.name === roleSearch)

    message.member.addRole(`${roleToAdd.id}`).then(() => message.react(`✅`)).catch(console.error)

    setTimeout( () => {
        message.delete();
    }, 5000 )
}
exports.help = {
    name: "addrole",
    description: "Allows bot to give you the provided role",
    usage: "`yabe addrole <role's name>(case sensitive)`",
}