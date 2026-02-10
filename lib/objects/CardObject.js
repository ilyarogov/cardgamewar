export class CardObject extends Phaser.GameObjects.Sprite
{
    #name = '';
    #value = 0;
    #zone = '';
    #scene = '';

    constructor (scene, x, y, texture, frame)
    {
        super (scene, x, y, texture, frame);
        this.#scene = scene;
        this.#name = texture;
        this.#value = texture.substring(1);
        scene.add.existing(this);
        this.setTexture('back');
        this.preFX.addShadow(0, 0, 0.1, 1, 0x000000, 6, 1);
    
        this.setInteractive().on(
            "pointerdown",
            function (pointer, localX, localY, event) {
                if(this.state != 'chosen') {
                    this.flip();
                }
            }
        );
    }

    addedToScene ()
    {
        super.addedToScene();
    }

    removedFromScene()
    {
        super.removedFromScene();
    }

    flip()
    {
        if(this.texture.key == 'back') {
            this.setTexture(this.#name);
        } else { 
            this.state = 'chosen';
            this.highlight();
            this.scene.events.emit('card-chosen', this.#name);
        }
    }

    highlight()
    {
        const fx = this.preFX.addGlow();
        this.#scene.tweens.add({
            targets: fx,
            outerStrength: 1.5,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
    }

    getName()
    {
        return this.#name;
    }
}