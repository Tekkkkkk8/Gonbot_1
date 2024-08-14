let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/siu.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `siu.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['سيو'] 
handler.customPrefix = /^(سيو|سيوو|سووو|سيوووو|سيوووووو|سوووووو|رونالدو|الدون)$/i;
handler.command = new RegExp;
export default handler