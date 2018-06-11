
const Discord = require('discord.js');

const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}');
});

client.on('guildCreate', guild => {
    console.log('joined new guild: ${guild.name} (id: ${guild.id}). ${guild.memberCount} members.');
});
let shouted=false;
client.on('message', async msg => {

    /* if author of message is not the bot */
    if(msg.author.bot) return;

    /* if message does not start with command prefix, it is not a command */
    // if(msg.content.indexOf(config.prefix) !== 0) return;
    let roles = msg.mentions.roles;
    if(msg.guild.roles.get(roles.first().id).name.toLocaleLowerCase()=="pleygame"&&msg.content.split(' ').length===1){
        var rand = parseInt(Math.random()*2);
        switch(rand){
            case 1:{
                msg.channel.send('`<@'+msg.author.username+'>: @pleygame`   **EH, SAY WHAT GAME OR SHUT THE FUCK UP LA, <@'+msg.author.id+'>**').then(msg =>{msg.delete(20000)});
                // msg.channel.send('`<@'+msg.author.username+'>: @pleygame`   **EH SHUT THE FUCK UP LA <@'+msg.author.id+'>**');
                break;
            }
            case 1:{
                msg.channel.send('`<@'+msg.author.username+'>: @pleygame`   **EH, <@'+msg.author.id+'>, U WANT TO PLAY GAME THEN SAY WHAT GAME LA. STUPID IS IT?**').then(msg =>{msg.delete(20000)});
                // msg.channel.send('`<@'+msg.author.username+'>: @pleygame`   **EH, <@'+msg.author.id+'>, U WANT TO PLAY GAME THEN SAY WHAT GAME LA, STUPID IS IT?**');
                break;
            }
        }
    }

    // const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    // const command = args.shift().toLowerCase();

    // msg.delete();
});

client.login(config.token);