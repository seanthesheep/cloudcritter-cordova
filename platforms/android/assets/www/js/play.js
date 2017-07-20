

    
    


	var critter;
    var jumping;
    var landing;
	var critterGravity = 800;
    var cloudGravity = -150;
	var critterJumpPower;    
	var score=0;
	var scoreText;
     var topScore;
     var powerBar;
     var powerTween;
     var placedPoles;
	var poleGroup; 
     var minPoleGap = 100;
     var maxPoleGap = 300; 
     var critterJumping;
     var critterFallingDown;     
     var play = function(game){}     
     play.prototype = {

		create:function(){
			critterJumping = false;
			critterFallingDown = false;
			score = 0;
			placedPoles = 0;
			poleGroup = game.add.group();
			topScore = localStorage.getItem("topFlappyScore")==null?0:localStorage.getItem("topFlappyScore");
			scoreText = game.add.text(10,10,"-",{
				font:"bold 16px VT323",
                fill: "#fff"
			});
			updateScore();
			game.stage.backgroundColor = "#2979FF";
			game.physics.startSystem(Phaser.Physics.ARCADE);
			critter = game.add.sprite(80,0,"critter");
            critter.frame = 5;
			critter.anchor.set(0.5);
			critter.lastPole = 1;
			game.physics.arcade.enable(critter);              
			critter.body.gravity.y = critterGravity;
			game.input.onDown.add(prepareToJump, this);
			addPole(80);
            critter.animations.add("jump", [2, 2, 0, 0, 0], 2, true);
            jumping = game.add.audio("jumping");
            landing = game.add.audio("landing");
		},
		update:function(){
			game.physics.arcade.collide(critter, poleGroup, checkLanding);
			if(critter.y>game.height){
				die();
			}
		}
	}     
 
	function updateScore(){
		scoreText.text = "Clouds: "+score+"\nTop: "+topScore;
        scoreText.font = 'VT323'
        scoreText.addColor = "#fff"
	}     
	function prepareToJump(){
	          powerBar = game.add.sprite(critter.x,critter.y-50,"powerbar");
	          powerBar.width = 0;
	          powerTween = game.add.tween(powerBar).to({
			   width:100
			}, 1000, "Linear",true); 
	          game.input.onDown.remove(prepareToJump, this);
	          game.input.onUp.add(jump, this);
                	
	}     
     function jump(){
          critterJumpPower= -powerBar.width*3-100
          powerBar.destroy();
          game.tweens.removeAll();
          critter.body.velocity.y = critterJumpPower*2.2;
          critterJumping = true;
          powerTween.stop();
          game.input.onUp.remove(jump, this);
          critter.animations.play("jump");
          jumping.play();
     }     
     function addNewPoles(){
     	var maxPoleX = 0;
		poleGroup.forEach(function(item) {
			maxPoleX = Math.max(item.x,maxPoleX)			
		});
		var nextPolePosition = maxPoleX + game.rnd.between(minPoleGap,maxPoleGap);
		addPole(nextPolePosition);			
	}
	function addPole(poleX){
		if(poleX<game.width*2){
			placedPoles++;
			var pole = new Pole(game,poleX,game.rnd.between(250,380));
			game.add.existing(pole);
	          pole.anchor.set(0.5,0);
			poleGroup.add(pole);
			var nextPolePosition = poleX + game.rnd.between(minPoleGap,maxPoleGap);
			addPole(nextPolePosition);
		}
	}	
	function die(){
		localStorage.setItem("topFlappyScore",Math.max(score,topScore));	
		game.state.start("Play");
	}
	function checkLanding(n,p){
		if(n.body.touching.down){
			var border = n.x-p.x
			if(Math.abs(border)>30){
				n.body.velocity.x=border*2;
				n.body.velocity.y=-100;	
			}
			var poleDiff = p.poleNumber-n.lastPole;
			if(poleDiff>0){
				score+= Math.pow(1,poleDiff);
				updateScore();	
				n.lastPole= p.poleNumber;
                critter.animations.stop();
                landing.play();
                critter.frame = 5;
			}
			if(critterJumping){
               	critterJumping = false;              
               	game.input.onDown.add(prepareToJump, this);
          	}
		}
	/*	else{
			critterFallingDown = true;
			poleGroup.forEach(function(item) {
				item.body.velocity.x = 0;			
			}); 
		}	*/		
	}
	Pole = function (game, x, y) {
		Phaser.Sprite.call(this, game, x, y, "pole");
		game.physics.enable(this, Phaser.Physics.ARCADE);
          //this.body.immovable = true;
          this.poleNumber = placedPoles;
          this.body.drag.setTo(9000);    
	};
	Pole.prototype = Object.create(Phaser.Sprite.prototype);
	Pole.prototype.constructor = Pole;
	Pole.prototype.update = function() {
          if(critterJumping && !critterFallingDown){
               this.body.velocity.x = critterJumpPower;
          }
          else{
               this.body.velocity.x = 0
          }
		if(this.x<-this.width){
			this.destroy();
			addNewPoles();
		}
	}	

    