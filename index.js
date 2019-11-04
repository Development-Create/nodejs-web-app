const Telegraf = require('telegraf');
const bot = new Telegraf('968670159:AAHQwEeGAZqbEthBhz8uSZTIw3xEEDO3hbA');
bot.start((ctx) => ctx.reply);
bot.on('message', (ctx) => {
    ctx.forwardMessage(167835992, ctx.chat, 'message')
    ctx.forwardMessage(58190565, ctx.chat, 'message')
    ctx.forwardMessage(100940048, ctx.chat, 'message')
    ctx.reply('Спасибо за беспокойство о Зале!')
})

bot.launch()
