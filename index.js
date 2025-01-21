const { Discord, Client } = require("discord.js-selfbot");
const client = new Client();

client.on("ready", () => {
  console.log(`Successfully logged in as ${client.user.tag}`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(".post")) {
    const args = message.content.split(" ");
    const channelID = args[1];
    const delay = args[2];

    const channel = client.channels.cache.get(channelID);

    if (channel) {
      message.channel.send(
        `Starting automatic messages in ${channel} with a delay of ${delay} seconds.`
      );

      startAutomaticMessages(channel, delay);
    } else {
      message.channel.send("Invalid channel ID.");
    }
  }
});

async function startAutomaticMessages(channel, delay) {
  while (true) {
    const content =
    " <:perm:1057375181645037638> <:easterndragon:1318208995206627348> <:point_trade:1055690645718716416> <:rocket:1317702770916196454>\n".repeat(4);

    await channel.send(content);
    await sleep(delay * 1000);
  }
}

let sent = [];
client.on("message", async (msg) => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        if (sent.includes(msg.author.id)) return;
        sent.push(msg.author.id);
        await sleep(5500);
        await msg.channel.send(`hey tbh i just claimed a perm fruit from this server: https://discord.gg/4VJtgzzY and now im tryna get another one, can u join please 🙏 u can get one too here proof bro: https://cdn.discordapp.com/attachments/1327359502474940490/1330925518337343488/image.png?ex=678fc07a&is=678e6efa&hm=81c2d4c18f4ab7b2461939cd0a114f48c89b482cc8ad447e75235251d37a7dfb&`);
      }
    }
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.login('OTczNjYxOTY0MTMzODg4MDUw.GsZeC1.oGChSgn0n7Qd8k1ZR1TtlsB_E5Zr8Zs5Hq7arg');