const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = async (client) => {

    client.enSwitch = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("spause")
                .setEmoji("<:Pause:1072109663853744149>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sprevious")
                .setEmoji("<:Previous:1072110795518918717>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sstop")
                .setEmoji("<:white_cross:1072109191789023312>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sskip")
                .setEmoji("<:skip:1072110764833382440>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sloop")
                .setEmoji("<:loop:1072107113146499094>"),
        ]);

    client.enSwitch2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sshuffle")
                .setEmoji("<:shuffle:1072107323214024786>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("svoldown")
                .setEmoji("<:volumemiddle:1072114075468828752>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sclear")
                .setEmoji("<:dustbin:1094830087737724928>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("svolup")
                .setEmoji("<:volume:1072111232288559104>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("squeue")
                .setEmoji("<:baseline_queue_white_48dp:1094826378437873694>"),
        ]);

    client.diSwitch = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("spause")
                .setEmoji("<:Pause:1072109663853744149>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sprevious")
                .setEmoji("<:Previous:1072110795518918717>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sstop")
                .setEmoji("<:white_cross:1072109191789023312>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sskip")
                .setEmoji("<:skip:1072110764833382440>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sloop")
                .setEmoji("<:loop:1072107113146499094>")
                .setDisabled(true),
        ]);

    client.diSwitch2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sshuffle")
                .setEmoji("<:shuffle:1072107323214024786>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("svoldown")
                .setEmoji("<:volumemiddle:1072114075468828752>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("sclear")
                .setEmoji("<:dustbin:1094830087737724928>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("svolup")
                .setEmoji("<:volume:1072111232288559104>")
                .setDisabled(true),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Secondary)
                .setCustomId("squeue")
                .setEmoji("<:baseline_queue_white_48dp:1094826378437873694>")
                .setDisabled(true),
        ]);
};