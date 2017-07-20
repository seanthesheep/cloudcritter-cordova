var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game'), Game = function() {};




game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', play);


game.state.start('load');
    