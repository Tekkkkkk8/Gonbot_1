let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
  const vn = './media/s7se70.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `s7se70.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['اشخر'] 
handler.customPrefix = /^(صحصحو|صحصحوا|نايمين|😴)$/i;
handler.command = new RegExp;
export default handler