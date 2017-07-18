var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game'), Game = function() {};


Game.prototype = {
create: function() {
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', play);
game.state.start('menu');
}
    
};
game.state.add('Game', Game);
game.state.start('Game');
    