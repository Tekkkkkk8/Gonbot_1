let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/deen (4).mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `deen (4).mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['ديني4'] 
handler.customPrefix = /^(ديني4)$/i;
handler.command = new RegExp;
export default handler