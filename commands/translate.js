const Discord = require("discord.js");
const request = require("request");

exports.run = (client, message, [args, ...words]) => {
    const regex = /[!*();,:@&=+$.\/?%#[\]]/g;

    //Commented langs just translate to english
    let langs = {
        'af': 'Afrikaans',
        'sq': 'Albanian',
        'am': 'Amharic',
        'ar': 'Arabic',
        //'an': 'Aragonese',
        'hy': 'Armenian',
        //'av': 'Avaric',
        //'ae': 'Avestan,
        'az': 'Azerbaijani',
        //'bm': 'Bambara',
        'eu': 'Basque',
        'be': 'Belarusian',
        'bn': 'Bengali',
        'bs': 'Bosnian',
        'bg': 'Bulgarian',
        'my': 'Burmese',
        'ca': 'Catalan',
        //'ch': 'Chamorro',
        //'ce': 'Chechen',
        'ny': 'Chichewa (Chewa, Nyanja)',
        'zh': 'Chinese',
        //'zh-Hans': 'Chinese (Simplified)',
        //'zh-Hant': 'Chinese (Traditional)',
        //'cv': 'Chuvash',
        //'kw': 'Cornish',
        //'co': 'Corsican',
        //'cr': 'Cree',
        'hr': 'Croatian',
        'cs': 'Czech',
        'da': 'Danish',
        'nl': 'Dutch',
        'en': 'English',
        'eo': 'Esperanto',
        'et': 'Estonian',
        'fi': 'Finnish',
        'fr': 'French',
        //'ff': 'Fula, Fulah, Pulaar, Pular',
        'gl': 'Galician',
        'gd': 'Gaelic (Scottish)',
        'ka': 'Georgian',
        'de': 'German',
        'el': 'Greek',
        'gu': 'Gujarati',
        'ht': 'Haitian Creole',
        'ha': 'Hausa',
        'he': 'Hebrew',
        //'hz': 'Herero',
        'hi': 'Hindi',
        //'ho': 'Hiri Motu',
        'hu': 'Hungarian',
        'is': 'Icelandic',
        //'io': 'Ido',
        'ig': 'Igbo',
        'id': 'Indonesian',
        'in': 'Indonesian',
        'ga': 'Irish',
        'it': 'Italian',
        'ja': 'Japanese',
        'jv': 'Javanese',
        'kn': 'Kannada',
        //'kr': 'Kanuri',
        'kk': 'Kazakh',
        'km': 'Khmer',
        //'ki': 'Kikuyu',
        'ky': 'Kyrgyz',
        //'kv': 'Komi',
        //'kg': 'Kongo',
        'ko': 'Korean',
        'ku': 'Kurdish',
        //'kj': 'Kyanyama',
        'lo': 'Lao',
        'la': 'Latin',
        'lv': 'Latvian (Lettish)',
        //'li': 'Limburgish (Limburger)',
        'lt': 'Lithuanian',
        //'lu': 'Luga-Katanga',
        'lg': 'Luxembourgish',
        'mk': 'Macedonian',
        'mg': 'Malagasy',
        'ms': 'Malay',
        'ml': 'Malayalam',
        'mt': 'Maltese',
        'mi': 'Maori',
        'mr': 'Marathi',
        'mh': 'Marshallese',
        'mo': 'Moldavian',
        'mn': 'Mongolian',
        //'nv': 'Navajo',
        //'ng': 'Ndonga',
        //'nd': 'Northern-Ndebele',
        'ne': 'Nepali',
        'no': 'Norwegian',
        'nb': 'Norwegian bokmål',
        'nn': 'Norwegian nynorsk',
        //'ii': 'Nuosu',
        //'oj': 'Ojibwe',
        //'cu': 'Church Slavic (Slavonic, Old Bulgarian)',
        //'pi': 'Pāli',
        'ps': 'Pashto (Pushto)',
        'fa': 'Persian (Farsi)',
        'pl': 'Polish',
        'pt': 'Portuguese',
        'pa': 'Punjabi (Eastern)',
        'ro': 'Romanian',
        'ru': 'Russian',
        //'se': 'Sami',
        'sm': 'Samoan',
        'sr': 'Serbian',
        'sh': 'Serbo-Croatian',
        'st': 'Sesotho',
        'sn': 'Shona',
        'sd': 'Sindhi',
        'si': 'Sinhalese',
        'sk': 'Slovak',
        'sl': 'Slovenian',
        'so': 'Somali',
        //'nr': 'Southern Ndebele',
        'es': 'Spanish',
        'su': 'Sundanese',
        'sw': 'Swahili (Kiswahili)',
        'sv': 'Swedish',
        'tl': 'Tagalog',
        //'ty': 'Tahitian',
        'tg': 'Tajik',
        'ta': 'Tamil',
        'te': 'Telugu',
        'th': 'Thai',
        'tr': 'Turkish',
        'uk': 'Ukrainian',
        'ur': 'Urdu',
        'uz': 'Uzbek',
        'vi': 'Vietnamese',
        //'wa': 'Wallon',
        'cy': 'Welsh',
        'fy': 'Western Frisian',
        'xh': 'Xhosa',
        'yi': 'Yiddish',
        'ji': 'Yiddish',
        'yo': 'Yoruba',
        'zu': 'Zulu',
    };

    let sourceLang = args[0] + args[1];
    let targetLang = args[3] + args[4];

    if (!langs.hasOwnProperty(sourceLang))
        return message.channel.send(`Source language \`${sourceLang}\` doesn't exist.\n(if you believe this is wrong make a bug report using \`yabe bug\`)`);
    if (args[2] !== "-")
        return message.channel.send('Please correctly format the command, like so\n\n`yabe translate en-es "word or sentence to translate"`');
    if (!langs.hasOwnProperty(targetLang))
        return message.channel.send(`Target Language \`${targetLang}\` doesn't exist.\n(if you believe this is wrong make a bug report using \`yabe bug\`)`);
    if (words == "")
        return message.channel.send("Please provide a word or sentence to translate.");

    let words2translate = words.join(" ").toLowerCase().replace(regex, "");
    let link = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURI(words2translate)}`;

    request.get(link, function(error, response, body) {
        if (error) 
            console.log(error);

        try {
            let translation = JSON.parse(body);
            let embed = new Discord.RichEmbed()
            .setDescription(translation[0][0][0])
            .setColor(client.config.embedColor)
            message.channel.send(`Translated from ${langs[sourceLang]} to ${langs[targetLang]}:`);
            message.channel.send(embed);
        }
        catch(err) {
            console.log(err);
            message.channel.send("Something went wrong while translating, please check you formatted it correctly and try again.\nor if you believe this is a bug please report it with `yabe bug`");
        }
    })
}