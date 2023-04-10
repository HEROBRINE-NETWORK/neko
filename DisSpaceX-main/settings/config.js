require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN || "OTcxMDI3NTE4MDMzMzgzNDY0.G2xHog.30F9pr7-8nzNyQa18RDcM43e6iBB5LZ4Qj7Oko",  // your bot token
    OWNER_ID: process.env.OWNER_ID || "896747852477378590", //your client id
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001", // embed message color!

    // Default autocomplete search
    SEARCH_DEFAULT: ["lo fi", "jvke", "post malone", "bassboost"],
    // Leave voice empty
    LEAVE_EMPTY: parseInt(process.env.LEAVE_EMPTY || "120000"), // 1000 = 1 sec

    // Spotify support playlist more 100+ track || false = default || Can get from here: https://developer.spotify.com/dashboard/applications
    SPOTIFY_TRACKS: parseBoolean(process.env.SPOTIFY_TRACKS || true),
    SPOTIFY_ID: process.env.SPOTIFY_ID || "a6f5a90e19614088b16e1073430efe7b",
    SPOTIFY_SECRET: process.env.SPOTIFY_SECRET ||"888132de955843eaaa2b9e53e22a5189"
}

function parseBoolean(ask) {
    if (typeof (ask) === 'string') {
        ask = ask.trim().toLowerCase();
    }
    switch (ask) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}