const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'NTkzMDU1MTkzNjcxOTI1Nzgw.XRIXcQ.WYFiB4wOi4njIWguiPjH_m313_o';
const prefix = "!";
const readline = require('readline');

bot.on("ready", function () {
    console.log("Bot/Selfbot started.");
});

bot.on('message', msg => {
    if (msg.content === "!bloxpiece") {
        msg.reply('Please check your dm')
        msg.author.send('Here Your Script!: https://pastebin.com/raw/BXUruPge');
    }
    if (msg.content === "!ping") {
        msg.reply(`Pong! ${Math.round(bot.ping)} ms`)
    }
    if (msg.content === "!randomping") {
        msg.reply('')
    }
    if (msg.content === "!fun") {
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
        msg.author.send('Retarded');
    }
    if (msg.content === "!commands") {
        msg.reply('List Of Commands :\n1: !bloxpiece - will give u blox piece script\n2: !ping - it will give u bot ping\n3: !randomping - umm idk\n4: !fun - same idk\n4: !status - show status of all script\n5: !gay - your gay or not?')
    }
    if (msg.content === "!status") {
        msg.reply('List Of Status\n1: Blox Pice gui working\n2: Anti-Cheat Blox Piece working\n3: Esp DF Blox Piece working')
    }
    if (msg.content === "!userinfo") {
        msg.reply(`Your username is `)
    }
    if (msg.content === "prefix") {
        msg.reply(`Our bot prefix is : "!"`)
    }
    if (msg.content === "!gay") {
        msg.reply(`Your Gay Is ${Math.random(bot.ping)}`)
    }
})


bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome-and-leave");
    if (!channel) return;
    channel.send(`Welcome ${member} to our server, please read <#593249915115667467>!`)
});

bot.on('guildMemberRemove', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome-and-leave");
    if (!channel) return;
    channel.send(`${member} Has left server :(`)
});

bot.login(process.env.BOT_TOKEN); ``
