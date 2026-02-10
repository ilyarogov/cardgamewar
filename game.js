import {TableScene} from "./lib/scenes/TableScene.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#39b84e',
    scene: TableScene,
    fx: {
        glow: {
            distance: 16,
            quality: 0.2
        }
    }
};

var game = new Phaser.Game(config);


