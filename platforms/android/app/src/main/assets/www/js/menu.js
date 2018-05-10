var menuState = {
    create: function() {
        var topScore = localStorage.getItem("topFlappyScore")==null?0:localStorage.getItem("topFlappyScore");
        game.stage.backgroundColor = '#3763d4';
        skyBackground = this.game.add.tileSprite(0,
            game.height - this.game.cache.getImage('sky-background').height,
            game.width,
            game.cache.getImage('sky-background').height,
            'sky-background'
        );

        var label = game.add.text(80,80, 'Cloud '+ '\n' + 'Critter',
        {font: '70px VT323', fill: '#fff'});

        var scoreLabel = game.add.text(80, game.world.height-350, 'Top Score '+topScore, {
            font: '25px VT323', fill: '#fff'
        });
        
        var startLabel = game.add.text(80, game.world.height-300, 'Tap to Start',
        {font: '35px VT323', fill: '#fff'});
        
        
        game.input.onDown.addOnce(this.start, this);
       
    },
    
    start: function(){
        game.state.start('play');
    }
    
};
  