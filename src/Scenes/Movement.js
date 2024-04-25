
class Movement extends Phaser.Scene{
    constructor(){
        super("movement");
        this.my = {sprite:{}}
        this.bullet = {sprite:{}}
        this.bodyX = 300;
        this.bodyY = 350;

    }
    preload(){
        this.load.setPath("./assets/");
        this.load.atlasXML("spritesheet", "spritesheet_default.png", "spritesheet_default.xml");

        this.akey = this.input.keyboard.addKey("A");
        this.dkey = this.input.keyboard.addKey("D");

        
        
    }
    create(){
        this.my.sprite.avatar = this.add.sprite(this.bodyX, this.bodyY, "spritesheet", "character_roundPurple.png");
        this.bullet.sprite.image = this.add.sprite(this.bodyX, this.bodyY, "spritesheet", "item_arrow.png");
        this.bullet.sprite.image.visible = false;
        this.bullet.sprite.image.rotation = -1.56;
        this.input.keyboard.on('keydown-SPACE', (event) => {
            
            this.bullet.sprite.image.x = this.my.sprite.avatar.x;
            this.bullet.sprite.image.y = this.my.sprite.avatar.y;
            this.bullet.sprite.image.visible = true;
        });
    }
    update(){
        this.bullet.sprite.image.y -= 5;
        if(this.akey.isDown){
            this.my.sprite.avatar.x -= 5;
        }
        else if(this.dkey.isDown){
            this.my.sprite.avatar.x += 5;
        }
    }
}