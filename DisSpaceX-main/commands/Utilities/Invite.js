const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: ["utilities", "invite"],
    description: "Invite bot to your server.",
    category: "Utilities",
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const embed = new EmbedBuilder()
        .setColor(client.color)
        .setAuthor({ name: "Invite!"})
        .setDescription("Invite the bot to your server. [Click here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=2184310032&scope=bot%20applications.commands)")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Invite")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=2184310032&scope=bot%20applications.commands`)
                    .setEmoji("<:IP_Invited_White:1072150095392411698>")
                    .setStyle(ButtonStyle.Link)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Support")
                    .setURL(`https://discord.gg/multiverse-development-964013065140043786`)
                    .setEmoji("<:support:1072151115447144559>")
                    .setStyle(ButtonStyle.Link)
            )
        
        interaction.editReply({ embeds: [embed], components: [row] });
    }
}
