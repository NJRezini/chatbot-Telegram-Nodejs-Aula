const env = require('./.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date - start;
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de Resposta: ${ms}ms`);
});

bot.start(async ctx => {
    const from = ctx.message.from;
    delete from.id;
    console.log(from);
    if(from.username == 'nathanrezini'){
        await ctx.reply(`Olá ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}`)
    } else {
        await ctx.reply(`Não falo com estranhos 😜`)
    }
})

bot.on('text', ctx => ctx.reply('Olá Mundo'));

bot.launch();