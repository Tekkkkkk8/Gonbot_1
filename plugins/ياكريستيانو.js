let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `*الافضل التاريخ العالمي القوي صاروخ ماديرا الكوليادور المقاوم القناص الجندي المحارب الذهبي الاسطوره الخارق البطل المنقذ المغوار ماكينة الاهداف*`;
  await conn.sendMessage(m.chat, {
 react: {
text: "🐐",
key: m.key,
 }
})

  conn.sendFile(m.chat, 'https://telegra.ph/file/dd9f37d7691615b6e976d.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(كريستيانو|رونالدو|الدون|ronaldo|كرستيانو)$/i;
handler.command = new RegExp;

export default handler;