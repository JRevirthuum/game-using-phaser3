var config = {
    type: Phaser.AUTO, // WebGL 지원하면 WebGL, 지원하지 않으면 Canvas
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: [ Init ]
};

var game = new Phaser.Game(config);
