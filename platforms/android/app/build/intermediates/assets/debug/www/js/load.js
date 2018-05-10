		var loadState = {
            
            preload:function(){
           // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;this.scale.minWidth = 360;this.scale.minHeight = 680;this.scale.maxWidth = 768;this.scale.maxHeight = 1152;

            game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js");
            game.add.text(0, 0, "fix", {font:"1px VT323", fill:"#2979FF"});
            game.load.image("sky-background", "images/sky2.png");
            game.load.spritesheet("critter", "images/critter2.png", 16,16);
            game.load.spritesheet("birds", "images/birds.png", 32,32);
            game.load.image("plane", "images/plane.png");
            game.load.image("pole", "images/cloud.png");
            game.load.image("powerbar", "images/powerbar.png");
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.load.audio("jumping", "audio/jumping.wav");
            game.load.audio("landing", "audio/landing.wav");
           
		},
            create:function(){
                game.state.start('menu');
            }
        };
        