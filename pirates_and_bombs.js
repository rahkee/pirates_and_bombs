var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image(
        'obstacle',
        'assets/Tile-Sets (64-64).png');
}

function create() {
    this.add.image(400, 300, 'obstacle');
}

function update() {
    
}