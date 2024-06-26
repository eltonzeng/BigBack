class EndScreen extends Phaser.Scene {
    constructor() {
        super("endScene");

    }

    init(data) {
        this.coinCount = data.coinCount || 0; // Retrieve the coin count from the passed data
    }

    create() {
        // Add end game message
        this.add.text(
            this.game.config.width / 2, 
            this.game.config.height / 2 - 50, 
            'Good Job! You finished the game!', 
            { fontFamily: 'Arial', fontSize: 40, color: '#ffffff' }
        ).setOrigin(0.5);

        // Display high score
        this.add.text(
            this.game.config.width / 2, 
            this.game.config.height / 2, 
            `Coin Count: ${this.coinCount}`, 
            { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' }
        ).setOrigin(0.5);
    }
}