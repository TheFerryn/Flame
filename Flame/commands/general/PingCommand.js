const FlameCommand = require('../../structures/FlameCommand');

module.exports = class extends FlameCommand {
    constructor() {
        super('ping', {
            description: 'Возвразщает задержку бота.',
            usage: 'ping',
            cooldown: 3,
            aliases: [],
        });
    }
    run(message, args) {
        return message.reply(`🏓 Pong! **${message.client.ws.ping}ms**`);
    }
}