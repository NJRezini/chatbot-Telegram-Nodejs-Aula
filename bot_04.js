const env = require('./.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(ctx => {
    ctx.reply(`Texto: '${ctx.message.text}' recebido com sucesso`);
});

bot.on('location', ctx => {
    const location = ctx.message.location;
    ctx.reply(`Sei que voce esta na latitude: ${location.latitude} e Logintude: ${location.longitude}`);
})

bot.on('contact', ctx => {
    const contact = ctx.message.contact;
    console.log(contact);
    ctx.reply(`Vou guardar o contati de ${contact.first_name} e telefone ${contact.phone_number}`);
})

bot.on('voice', ctx => {
    const voice = ctx.message.voice
    console.log(voice)
})

bot.on('photo', ctx => {
    const photo = ctx.message.photo;
    
    photo.forEach((ft, i) => {
        ctx.reply(`Foto ${i} tem resolucao de ${ft.width}x${ft.height}`)
    });
});

bot.on('sticker', ctx => {
    const figurinha = ctx.message.sticker;
    console.log(figurinha);
    ctx.reply(`Voce enviou uma figurinha correspondente ${figurinha.emoji} do pacote ${figurinha.set_name}`)
})

bot.on('animation', ctx => {
    const animation = ctx.message.animation;
    console.log(animation);
    ctx.reply(`Esta animação dura ${animation.duration}s e o tamanho do arquivo é de ${animation.file_size}`)
})

bot.launch();