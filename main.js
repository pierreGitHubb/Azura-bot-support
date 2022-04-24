const Discord = require("discord.js")

const partnership = "!Azura Si fanno partnership in questo server? Posso farlo?";
const staffer = "!Azura Come posso diventare staffer di questo server?";
const informazioni = "!Azura Che tipo di server è? Di cosa si parla?"

const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING"]}
)

client.login("OTY1OTI5OTgwNzQxNzA5ODI0.Yl6WZQ.tWVFTLv_8gjMy9Vqau2h_0455l0")

client.on("ready", ()=>{
    console.log("Ready")
})

client.on("messageCreate", (message)=>{
    if(message.content == partnership){
        message.channel.send("Sì, facciamo molte partnership e sarebbe un piacere farlo anche col tuo server.")
    }

    if(message.content == staffer) {
        message.channel.send("Per diventare staffer del server partecipa durante le candidature e decideremo se promuoverti a staffer o no.")
    }

    if(message.content == informazioni) {
        message.channel.send("Serve per divertirsi e creare nuove relazioni d'amicizia e varie, vogliamo coinvolgere tutti senza lasciare nessuno indietro.")
    }
})
