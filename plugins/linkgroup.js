let handler = async (m, { conn,usedPrefix,command }) => {
    try{try {
    conn.reply(m.chat, `*Group Link :* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\n${conn.user.name}`, m)
  } catch {
      conn.reply(m.chat, `Make @${conn.user.jid.split('@')[0]} an admin to use this command!`, m, {mentions: [conn.user.jid]})
 }
}catch(e){
conn.reply(m.chat,`${e}`)
  conn.reply('120363022211098165@g.us',`๐จ๐ต๐ผ๐ต! ๐ฎ๐ป ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ข๐ฐ๐ฐ๐๐ฟ๐ฒ๐ฑ 

๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}

  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}
  
  ๐ฃ๐ผ๐๐๐ถ๐ฏ๐น๐ฒ ๐ฅ๐ฒ๐ฎ๐๐ผ๐ป๐ :
     โข ๐๐ป๐๐ฎ๐น๐ถ๐ฑ ๐จ๐๐ฎ๐ด๐ฒ ๐ข๐ณ ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ
     โข ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ ๐๐ฟ๐ฟ๐ผ๐ฟ
     โข ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ ๐๐ฟ๐ฟ๐ผ๐ฟ๐
     โข ๐๐ฟ๐ฟ๐ผ๐ฟ ๐ฎ๐ ๐ฑ๐ฒ๐๐ฒ๐น๐ผ๐ฝ๐ฒ๐ฟ๐ ๐๐ป๐ฑ
     โข ๐๐ฎ๐๐ฎ ๐ก๐ฒ๐๐๐ผ๐ฟ๐ธ ๐๐๐๐๐ฒ๐ `, null, {})
}}
handler.help = ['ษชษดแด ษชแดแด']
handler.tags = ['group']
handler.command = /^invite$/i
  
handler.group = true
//handler.botAdmin = true
  
module.exports = handler
