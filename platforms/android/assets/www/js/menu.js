var menuState = {
    
    create: function() {
        var label = game.add.text(80,80, 'Cloud Critter',
        {font: '50px Arial', fill: '#fff'});
        
        var startLabel = game.add.text(80, game.world.height-80, 'press w',
        {font: '25px Arial', fill: '#fff'});
        
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.start, this);
       
    },
    
    start: function(){
        game.state.start('play');
    }
    
};
  