export class CardObject extends Phaser.GameObjects.Sprite
{
    #suit = '';
    #value = 0;
    #zone = '';

    constructor (scene, x, y, texture, frame)
    {

        super (scene, x, y, texture, frame);
        this.#value = texture.substring(1);
        scene.add.existing(this);
        this.setInteractive({draggable: true})
        this.on('drag', (pointer, dragX, dragY) =>
        {

            this.x = dragX;
            this.y = dragY;

        });
        // this.setInteractive().on(
        //     "pointerdown",
        //     function (pointer, localX, localY, event) {
        //         this.flip();
        //     }
        // );
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
        this.setTexture('back');
    }
}