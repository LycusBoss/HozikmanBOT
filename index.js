const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "!";

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım")
    console.log("Bağlandım!")
});


bot.login(process.env.Bot.login)

bot.on("message", message => {

    if (message.content.toLowerCase() === "asfasfasfsagassagsagasgsagasg") {
        message.reply("asgasgsaasqwfqwfwqfwgwqgqwgqwf21321321321g")
    }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)

            .addField("Toplam Kanal Sayısı", bot.channels.size, true)


            .setColor(0x000001)

        return message.channel.sendEmbed(embed)

    }


    if (message.content === prefix + "twitch") {
        const embed = new Discord.RichEmbed()

        .setAuthor('Hozikman Twitch', 'http://imgim.com/76incis1515703.jpg', 'https://www.twitch.tv/hozikman  ')

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)

    }

    if (message.content === prefix + "youtube") {
        const embed = new Discord.RichEmbed()

      .setAuthor('Hozikman Youtube', 'http://imgim.com/76incis1515703.jpg', 'https://www.youtube.com/channel/UC-PjyQhjKeqQ5YwKkFqCGZA')

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)

    }

    if (message.content === prefix + "instagram") {
        const embed = new Discord.RichEmbed()

  .setAuthor('Hozikman İnstagram', 'http://imgim.com/76incis1515703.jpg','https://www.instagram.com/hozikman/')

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)

    }


    if (message.content === prefix + "hozikman") {
        const embed = new Discord.RichEmbed()

      .setAuthor('Hozikman Hakkında', 'http://imgim.com/76incis1515703.jpg', 'https://www.youtube.com/channel/UC-PjyQhjKeqQ5YwKkFqCGZA/about')

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)

    }



    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")

    }

    if (message.content === prefix + "çikolata") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍫")

    }

      if (message.content === "Aga bee") {
          message.channel.send(`Aga bee yak yak yak. <@${message.author.id}>`)
          message.react("🚬")

      }


    if (message.content === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.

**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
${prefix}twitch - Hozikmanın Twitch linkini verir.
${prefix}youtube - Hozikmanın Youtube linkini verir.
${prefix}instagram - Hozikmanın İnstagram linkini verir.
${prefix}hozikman - Hozikmanın hakkında bazı bilgiler.
\`\`\`

**Eğlence Komutları**
\`\`\`fix
${prefix}kurabiye - Size kurabiye verir.
${prefix}çikolata - Size çikolata verir.
\`\`\` `)
    }


  });
