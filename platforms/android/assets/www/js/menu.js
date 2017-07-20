var menuState = {
    
    create: function() {
        game.stage.backgroundColor = '#2979FF';
        var label = game.add.text(80,80, 'Cloud Critter',
        {font: '50px VT323', fill: '#fff'});
        
        var startLabel = game.add.text(80, game.world.height-80, 'start',
        {font: '25px VT323', fill: '#fff'});
        
    
        
        game.input.onDown.addOnce(this.start, this);
       
    },
    
    start: function(){
        game.state.start('play');
    }
    
};
  