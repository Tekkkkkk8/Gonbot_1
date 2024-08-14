const handler = async (m, {
  conn,
  isPrems
}) => { // lastmiming
  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['يا له من محترف 😎 لقد استخرجت',
  '🌟✨ باهِر!! لقد حصلت',
  'رائع!! أنت عامل منجم عظيم ⛏️ تحصل عليه',
  'لقد قمت بالتعدين!!',
  '😲 لقد تمكنت من استخراج كمية من',
  'سوف يزيد دخلك بفضل حقيقة أنك قمت بالتعدين',
  '⛏️⛏️⛏️⛏️⛏️ التعدين',
  '🤩 نعم!!! الآن لديك',
  'المئذنة على جانبك، ولهذا السبب تحصل عليها',
  '😻 حظ ميناr',
  '♻️ لقد تم إنجاز مهمتك، وتمكنت من مهمتي',
  '⛏️ لقد أفادك التعدين',
  '🛣️ لقد عثرت على مكان ومن خلال التعدين قال المكان الذي تحصل عليه',
  '👾 بفضل حقيقة أنك قمت بتعدين دخلك يزيد',
  'تهانينا!! الآن لديك', '⛏️⛏️⛏️ لقد حصلت'])}`;
  const pp = 'https://png.pngtree.com/thumb_back/fw800/background/20220428/pngtree-cartoon-mining-game-design-composition-with-different-mining-equipment-inside-the-image_1108471.jpg';
  const aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1;
  const aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1;
  const rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1;
  const rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1;
  const pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1;
  const pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1;
  const recompensas = {
      aqua: premium ? aquapremium : aqua,
      rock: premium ? rockpremium : rock,
      pancingan: premium ? pancinganpremium : pancingan
  };
  const money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1;
  const moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1;
  const time = user.lastcoins + 600000; // 10 min
  if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ انتظر ${msToTime(time - new Date())} لمواصلة التعدين ${global.rpgshopp.emoticon('money')}⛏️*`, m);
  user.money += premium ? moneypremium : money;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
      if (!(reward in user)) continue;
      user[reward] += recompensas[reward];
      texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }

  function _0x5adb(_0x54b7e3, _0x17e035) {
      const _0x5adb77 = _0x17e0();
      _0x5adb = function (_0x4dd60, _0x4da4b9) {
          _0x4dd60 = _0x4dd60 - 0x0;
          let _0x55362c = _0x5adb77[_0x4dd60];
          return _0x55362c;
      };
      return _0x5adb(_0x54b7e3, _0x17e035);
  }

  function _0x17e0() {
      const _0x4e4f71 = ['2979261HOwOMI', '🎟️ مميز', '4739624rwkdok', '672484HuqgkS', '\x0a\x0a🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ', '9xQFWuq', 'mystic.jpg', '1068615sFFcgT', '9152220qNEIdg', 'money', '*\x0a\x0a🍁خرفي\x0a', '361OjDCuE', 'emoticon', '*\x0a*', '3764ivpypb', '7LpDAlv', '10PJZfjB', 'chat', '2839248sNwaMb', '\x0aᴋᴀɴᴇᴋɪ ʙᴏᴛ²⁰¹⁵⁵⁴⁵⁸²⁸⁵¹', 'sendFile'];
      _0x17e0 = function () {
          return _0x4e4f71;
      };
      return _0x17e0();
  }
  const _0x19dad7 = _0x5adb;
  (function (_0x32454b, _0x56fe75) {
      const _0x6b3dcb = _0x5adb;
      const _0x35fbce = _0x32454b();
      while (!![]) {
          try {
              const _0x2b7f1c = parseInt(_0x6b3dcb(0x13)) / 0x1 * (parseInt(_0x6b3dcb(0x1)) / 0x2) + -parseInt(_0x6b3dcb(0xd)) / 0x3 * (-parseInt(_0x6b3dcb(0xb)) / 0x4) + -parseInt(_0x6b3dcb(0xf)) / 0x5 + -parseInt(_0x6b3dcb(0x5)) / 0x6 * (-parseInt(_0x6b3dcb(0x2)) / 0x7) + -parseInt(_0x6b3dcb(0xa)) / 0x8 + -parseInt(_0x6b3dcb(0x8)) / 0x9 * (-parseInt(_0x6b3dcb(0x3)) / 0xa) + -parseInt(_0x6b3dcb(0x10)) / 0xb;
              if (_0x2b7f1c === _0x56fe75) {
                  break;
              } else {
                  _0x35fbce['push'](_0x35fbce['shift']());
              }
          } catch (_0x2689cb) {
              _0x35fbce['push'](_0x35fbce['shift']());
          }
      }
  }(_0x17e0, 0x5566e));
  const text = '*' + (premium ? _0x19dad7(0x9) : '🆓 مستخجم عادي') + _0x19dad7(0x0) + minar + '*\x0a*' + money + ' ' + global['rpgshop'][_0x19dad7(0x14)](_0x19dad7(0x11)) + _0x19dad7(0x12) + texto + _0x19dad7(0xc) + (premium ? '✅' : '❌') + '\x0a' + wm + _0x19dad7(0x6);
  await conn[_0x19dad7(0x7)](m[_0x19dad7(0x4)], pp, _0x19dad7(0xe), text);

  user.lastcoins = new Date * 1;
};
handler.help = ['minar2'];
handler.tags = ['gata'];
handler.command = ['كوينز', 'miming2', 'تعدين 2', '2تعدين', 'minarcoins', 'minarmystic'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m y ' + seconds + ' s ';
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}