const Discord = require('discord.js');
const Jimp    = require("jimp");
const PREFIX  ="%";
const bot     = new Discord.Client();


// erro messages 
var error= ["```Someone Touch My Spaghet!?```","```Do You Know the Way!:AniKnuckles:```","```WROOG```","```Wanna Come Back To My Crib?```"];
var servers ={};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// welcome , good bye messages . and picking roles 
bot.on("guildMemberAdd",function(member)
{
    // url of member  avater =>member.user.avatarURL
    // number of =>member.guild.memberCount
    // username of =>member.user.tag
    // name of guild =>member.guild.name
    var images  =[member.user.avatarURL,'background.jpg','border.jpg'];
    var jimps   =[];
    for(var i=0;i<images.length; i++){
        jimps.push(Jimp.read(images[i]));
    }
    Promise.all(jimps).then(function(data){
        return Promise.all(jimps);
    }).then(function(data){
        data[0].resize(500,500);
        data[1].composite( data[2], 80, 175);
        data[1].composite( data[0], 98, 190);
            Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            data[1].print(font, 1141, 175, "Welcome");
            data[1].print(font, 850, 387, member.user.tag);
            data[1].print(font, 1141, 587, member.guild.memberCount+"th user");
            data[1].write("welcome_post.jpg");
            member.guild.channels.find("name","join-leave-channel").send("Welcome to :tulip::heart: "+member.guild.name.toString()+","+member.toString()+"! You  are the "+member.guild.memberCount+"th user :tada:");
            member.guild.channels.find("name","join-leave-channel").sendFile('welcome_post.jpg','welcome_post.jpg');
            });   
    });
     
});

bot.on("guildMemberRemove",function(member)
{
    member.guild.channels.find("name","join-leave-channel").send("**"+member.toString()+"** it takes forever to say goodbye , **False**. it takes exactly .978 secounds to say goodbye.");
});

//commands to do 

bot.on("message",function(message)
{
    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(PREFIX))return;

    var args =message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){
        case "help":
        message.channel.sendMessage("not finished yet the bot in testing");
            break;
        
        default:
        message.channel.sendMessage(error[getRandomInt(4)]);   
    }
});

bot.login(process.env.BOT_TOKEN);
