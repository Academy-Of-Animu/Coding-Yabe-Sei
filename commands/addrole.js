exports.run = (client, message, args) => {
    try {
    let roleSearch = args.join(" ")
    let roleToAdd = message.guild.roles.find(x => x.name === roleSearch)
    
    if(!roleSearch) return message.reply('please provide a role for me to add.')
    if(message.member.roles.has(roleToAdd.id)) return message.reply('you already have that role!')
    if(!roleToAdd) return message.reply(`That role, **${roleSearch}**, does not exist.`)

    message.member.addRole(`${roleToAdd.id}`).then(() => message.react(`✅`)).catch(console.error)

    setTimeout( () => {
        message.delete();
    }, 5000 )
    } catch (err) {
        console.log('There was an error: ' + err)
    }
}
exports.help = {
    name: "addrole",
    description: "Allows bot to give you the provided role",
    usage: "`yabe addrole <role\'s name>(case sensitive)`",
}
