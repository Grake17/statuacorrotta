const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = process.env.token

client.on("ready", () =>{
    console.log("connect as " + client.user.tag +" ")
    let utenti = client.guilds.cache.get("685818099383140353").memberCount;              
    let args = utenti + " Membri";                   
    client.user.setActivity(args, {type: "WATCHING"});
})

client.login(token)

//Var Compagnie
const compagnie = require("./clan/compagnie")
const sposta = require("./sposta/sposta")

client.on("message", message =>{
    if(message.guild != null){
        if(message.author.bot != true){
            if(message.content.startsWith(">c sposta")){

                let utente = message.guild.member(message.mentions.members.first());
                sposta(message,client,utente)

            }else if(message.channel.id == config.canale1 || message.channel.id == config.canale2){
                if(message.content.startsWith(config.prefix + "c")){

                    compagnie(message,client)

                }        
            }          
        } 
    }      
})

client.on("guildMemberAdd", member => {    
    let utenti = client.guilds.cache.get("685818099383140353").memberCount;              
    let args = utenti + " Membri";                   
    client.user.setActivity(args, {type: "WATCHING"});
})

client.on("guildMemberRemove", member => {    
    let utenti = client.guilds.cache.get("685818099383140353").memberCount;              
    let args = utenti + " Membri";                   
    client.user.setActivity(args, {type: "WATCHING"});
})
