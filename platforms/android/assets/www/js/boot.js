var boot = {
  preload: function() {
    //assets we'll use in the loading screen
    game.load.image('preloadbar', 'images/preloader-bar.png');
  },
  create: function() {
    //loading screen will have a white background
    game.stage.backgroundColor = '#2979FF';

    //scaling options
    scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    //have the game centered horizontally
    scale.pageAlignHorizontally = true;
    scale.pageAlignVertically = true;

    //physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    state.start('load');
  }
};
