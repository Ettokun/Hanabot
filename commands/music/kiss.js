const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kiss',
      group: 'misc',
      memberName: 'kiss',
      guildOnly: true,
      description: 'Kiss someone!'
    });
  }

  run(message) {

const rando_imgs = [
'https://cdn.myanimelist.net/s/common/uploaded_files/1483590076-279c6e2645e2df2bbba1f76b80a70f06.gif',
'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif',
'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
'https://cdn.lowgif.com/full/011acd5511e7c9fc-anime-kiss-gifs-tumblr.gif',
'https://data.whicdn.com/images/248033408/original.gif',
'https://gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-10.gif',
'https://media.giphy.com/media/X3ndlrK6rOCt2/giphy.gif',
'https://i.pinimg.com/originals/01/55/83/015583a2ed72819ce6201989ad46079b.gif',
'https://media1.tenor.com/images/627dea6d9216b1b6d15819405a349bda/tenor.gif',
'https://pa1.narvii.com/6248/cae38662b21747d6247776d35b8d2db50944ef08_hq.gif',
'https://66.media.tumblr.com/836f4561ecdb0e9ea6cac4872bf05b90/14e690faf850d150-5a/s640x960/2ae5ca7423775db751cf1d4f253ac8511fa35bdc.gif',
'https://i.chzbgr.com/full/8474882048/h22A2BFCE/get-a-room.gif',
'https://i.gifer.com/LY6o.gif',
]

const user = message.mentions.users.first()
  const embedhug = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Kiss')
  .setDescription(`<a:hana_heart:723707372849201192> <@${message.author.id}> kissed <@${user.id}> <a:hana_heart:723707372849201192>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter('Return the hug clicking on 🔃!')
  

  const embedhug2 = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Kiss')
  .setDescription(`<a:hana_heart:723707372849201192> <@${user.id}> kissed <@${message.author.id}> <a:hana_heart:723707372849201192>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter(`Return the hug clicking on 🔃!`)
message.channel.send(`<@${message.author.id}>`, embedhug).then(msg =>{
msg.react('🔃')

let filtro = (reaction, usuario) => reaction.emoji.name === "🔃" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
    msg.edit(embedhug2)
});
})
}
}