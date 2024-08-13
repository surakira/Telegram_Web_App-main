const { Telegraf } = require("telegraf")
const TOKEN = "6243911743:AAF2HiWuOt7NXKGKvYkmRnUus9bTq1Q_f_g";
const bot = new Telegraf(TOKEN);

const web_link = "https://66b9c28d6801ee43b044ff18--polite-kangaroo-e90171.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
