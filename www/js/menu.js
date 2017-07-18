var menuState = {
    
    create: function() {
        var label = game.add.text(80,80, 'Cloud Critter');
       
    },
    
    start: function(){
        game.state.start('play');
    }
    
};