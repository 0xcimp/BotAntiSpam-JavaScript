const Discord = require('discord.js');
const antispam = require('better-discord-antispam-fr'); // Module pour anti-spam
const client = new Discord.Client();
 
client.on('ready', () => {
 
   antispam(client, {
        limitUntilWarn: 3, // La quantité de messages autorisés à envoyer dans l’intervalle (temps) avant d’obtenir un avertissement.
        limitUntilMuted: 5, // La quantité de messages autorisés à envoyer dans l’intervalle (temps) avant d’obtenir une sourdine.
        interval: 2000, // L’intervalle (temps) où les messages sont envoyés. Pratiquement, si le membre X a envoyé 5+ messages en 2 secondes, il est mis en sourdine. (1000 millisecondes = 1 seconde, 2000 millisecondes = 2 secondes, etc.)
        warningMessage: "if you don't stop from spamming, I'm going to punish you!", // Message que vous recevez lorsque vous êtes averti!
        muteMessage: "was muted since we don't like too much advertisement type people!", // Message envoyé après que le membre X a été puni (mis en sourdine).
        maxDuplicatesWarning: 7,// Lorsque les gens envoient le même message, cela se produit lorsque le membre X envoie plus de 7 messages.
        maxDuplicatesMute: 10, // La limite où le membre X est mis en sourdine après avoir envoyé trop de messages (10+).
        ignoredRoles: ["Admin"], // Les membres ayant ce rôle (ou ces rôles) seront ignorés s’ils l’ont. Suggérez de ne pas ajouter cela à des gars aléatoires. De plus, c’est sensible à la casse.
        ignoredMembers: ["Mavis#2389"], // Ces membres sont directement touchés et ils n’ont pas besoin d’avoir le rôle ci-dessus. Bon pour les blagues d’infiltration.
        mutedRole: "muet", // Ici, vous mettez le nom du rôle qui ne devrait pas laisser les gens écrire/parler ou quoi que ce soit d’autre dans votre serveur. S’il n’y a pas de jeu de rôle, par défaut, le module tentera de créer le rôle pour vous et de le définir correctement pour chaque canal de votre serveur. Il sera nommé "muet".
        timeMuted: 1000 * 600, // C’est le temps pendant lequel le membre X sera mis en sourdine. Si ce n’est pas le cas, la valeur par défaut serait de 10 minutes.
        logChannel: "antispam-logs" // C’est le canal où chaque rapport sur le spamming va. S’il n’est pas configuré, il tentera de créer le canal.
      });
      
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // Ceci exécute le filtre sur n’importe quel message que le bot reçoit dans n’importe quelle guilde.
  
}
 
client.login('token');
