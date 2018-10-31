const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاتة');
  }
});


const adminprefix = "!";
const devs = ['490891548494659586','490891548494659586'];
client.on('message', message => {
 var argresult = message.content.split(` `).slice(1).join(' ');
   if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
 client.user.setGame(argresult);
   message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
 if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
   message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
 if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
     } else    
if (message.content.startsWith(adminprefix + 'streaming')) {
 client.user.setGame(argresult, "https://www.twitch.tv/idk");//حقوق دايموند كودز
   message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//حقوق دايموند كودز
}
});
 
client.login("NTA3MjQ1NjA3MDMxNjY4Nzc2.DruARA.uc2ZA7MUdwi4L8hG6ZZYQI--RR0");
