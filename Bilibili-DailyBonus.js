/*
哔哩哔哩漫画签到

脚本兼容: QuantumultX, Surge, Loon
电报频道：@NobyDa
问题反馈：@NobyDa_bot
如果转载，请注明出处

说明：
打开哔哩哔哩漫画后 (AppStore中国区)，单击"我的", 如果通知获取cookie成功, 则可以使用此脚本. 

脚本将在每天上午9点执行。 您可以修改执行时间。

~~~~~~~~~~~~~~~~
Surge 4.2.0+ :

[Script]
Bili漫画签到 = type=cron,cronexp=0 9 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js

Bili漫画Cookie = type=http-request,pattern=^https:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js

[MITM]
hostname = app.bilibili.com
~~~~~~~~~~~~~~~~
QX 1.0.10+ :

[task_local]
0 9 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js, tag=Bili漫画签到

[rewrite_local]
#获取Bili漫画Cookie
^https:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js

[mitm]
hostname = app.bilibili.com
~~~~~~~~~~~~~~~~
*/

// const cookie = $.getdata("CookieBM") || ''; // 哔哩哔哩漫画Cookie
const cookie = process.argv.slice(2)[0];

if (typeof $request !== 'undefined') {
  GetCookie()
} else {
  checkin()
}

function checkin() {
  const bilibili = {
    url: 'https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn',
    headers: {
      Cookie: cookie,
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/609.3.5.0.2 (KHTML, like Gecko) Mobile/17G80 BiliApp/822 mobi_app/ios_comic channel/AppStore BiliComic/822',
    },
    body: "platform=ios"
  };
  const request = require('request');
  request.post(bilibili, async function(error, response, data) {
    if (error && !data) {
      console.error(`请求失败!\n${error}`);
    } else if (parseInt(response.status) == 200) {
      console.info(result = "签到成功！🎉");
    } else if (/duplicate/.test(data)) {
      console.warn("今日已签过 ⚠️");
    } else if (/uid must/.test(data)) {
      onsole.error("Cookie失效 ‼️‼️");
    } else {
      console.error(`签到失败 ‼️\n${data}`);
    }
  })
}
