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
    await ctx.reply(`Seja bem vindx, ${ctx.message.from.first_name}`)

    await ctx.reply('Veja o vídeo: https://www.youtube.com/watch?v=CQZYzGO8QlM')

    //Resposta com HTML
    await ctx.replyWithHTML(`Pode ser usado tags <strong>Para negrito</strong> ou para <em>Itálico</em>. <a href="http://sc.senai.br/">SENAI</a> <code>Código</code>`)

    //Resposta com Markdown
    await ctx.replyWithMarkdown('Dá para escrever em *Negrito*, em _itálico_, em `Código` ou Bloco de código. também é possível Link [SENAI](http://sc.senai.br/)')

    //Resposta com foto
    await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',{caption: 'Foto Aleatória'})

    //Resposta com Localização
    await ctx.replyWithLocation(-27.1156927, -48.9123907)

    //Resposta com GIF animation
    await ctx.replyWithAnimation(gifTelegram)
})


bot.launch();