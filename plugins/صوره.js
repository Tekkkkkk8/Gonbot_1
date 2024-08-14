import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `للإستخدام *مثال*: ${usedPrefix}${command} dark man`
    const res = await googleImage(text)
  //قناتي هتفيدك
//https://whatsapp.com/channel/0029VaQ12JyLY6d1PdN5r93a
//رقمي 967733707084

    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `*𝑩𝒀: 𝐆𝐎𝐍-𝐁𝐎𝐓*
🔎 النتيجة: *${text}*
🌎 الصورة مأخوذة من جوجل
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = ['صوره','صورة']
///
export default handler