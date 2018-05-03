var menuState = {
    create: function() {
        var topScore = localStorage.getItem("topFlappyScore")==null?0:localStorage.getItem("topFlappyScore");
        game.stage.backgroundColor = '#2979FF';
        var label = game.add.text(80,80, 'Cloud '+ '\n' + 'Critter',
        {font: '70px VT323', fill: '#fff'});

        var scoreLabel = game.add.text(80, game.world.height-50, 'Top Score '+topScore, {
            font: '25px VT323', fill: '#fff'
        });
        
        var startLabel = game.add.text(80, game.world.height-100, 'Tap to Start',
        {font: '35px VT323', fill: '#fff'});
        
        
        game.input.onDown.addOnce(this.start, this);
       
    },
    
    start: function(){
        game.state.start('play');
    }
    
};
  