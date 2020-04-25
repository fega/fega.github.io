var winW = document.body.offsetWidth
// var winH = document.body.offsetHeight
var cursors
var ledge
var game = new Phaser.Game(winW, 300, Phaser.AUTO, 'footer-container', { preload: preload, create: create, update: update })
var platforms
var player

function preload() {
	game.load.spritesheet('player', 'img/game/player.png',29,29)
	game.load.image('ground', 'img/game/ground.png')
	game.load.image('mountain', 'img/game/mountain.png')
	game.load.image('plant', 'img/game/plant.png')
	game.stage.backgroundColor = "#512da8"
	cursors = game.input.keyboard.createCursorKeys()
}

function create() {
	//WORLD
	for(var i=0;i<game.world.width;i+=64){
		game.add.sprite(i, game.world.height - 32*3, 'mountain')
	}
	game.add.sprite(400, game.world.height - 32*1.25, 'plant')
	game.add.sprite(420, game.world.height - 32*1.25, 'plant')
	game.add.sprite(620, game.world.height - 32*1.3, 'plant')
	game.add.sprite(640, game.world.height - 32*1.35, 'plant')
	game.add.sprite(670, game.world.height - 32*1.35, 'plant')


	game.add.sprite(32, game.world.height - 32*2, 'plant')

	game.add.sprite(520, game.world.height - 32*1.6, 'plant')
	game.add.sprite(480, game.world.height - 32*1.6, 'plant')
	game.add.sprite(500, game.world.height - 32*2, 'plant')

	// game.add.sprite(520, game.world.height - 32*1.6, 'plant')
	// game.add.sprite(480, game.world.height - 32*1.6, 'plant')
	game.add.sprite(800, game.world.height - 32*2.4, 'plant')
	game.add.sprite(800, game.world.height - 32*3.2, 'plant')

	platforms = game.add.group()
	platforms = game.add.group()
	platforms.enableBody = true
	var ground = platforms.create(0, game.world.height - 32, 'ground')
	ground.scale.setTo(winW/32, 1)
	ground.body.immovable = true

	ledge = platforms.create(5*32, game.world.height - 32*2, 'ground')
	ledge.scale.setTo(5.1, 1)
	ledge.body.immovable = true
	ledge = platforms.create(6*32, game.world.height - 32*3, 'ground')
	ledge.scale.setTo(4.2, 1)
	ledge.body.immovable = true
	ledge = platforms.create(7*32, game.world.height - 32*4, 'ground')
	ledge.scale.setTo(3.3, 1)
	ledge.body.immovable = true
	ledge = platforms.create(8*32, game.world.height - 32*5, 'ground')
	ledge.scale.setTo(2.4, 1)
	ledge.body.immovable = true
	ledge = platforms.create(9*32, game.world.height - 32*6, 'ground')
	ledge.scale.setTo(1.5, 1)
	ledge.body.immovable = true

	// PLAYER
	player = game.add.sprite(32, game.world.height - 150, 'player')
	//  We need to enable physics on the player
	game.physics.arcade.enable(player)
	//  Player physics properties. Give the little guy a slight bounce.
	player.body.bounce.y = 0.1
	player.body.gravity.y = 1800
	player.body.collideWorldBounds = true
	//  Our two animations, walking left and right.
	player.animations.add('right', [0,2,1,2], 10, true)
	player.animations.add('left', [5,3,4,3], 10, true)
	player.animations.add('jump', [6], 1, true)
	// player.obj.anchor.setTo(0.5, 0.5)
}

function update() {
	//  Collide the player and the stars with the platforms
  var hitPlatform = game.physics.arcade.collide(player, platforms)
	player.body.velocity.x = 0

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150
        player.animations.play('left')
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150
        player.animations.play('right')
    }
    else
    {
        //  Stand still
        player.animations.stop()
        player.frame = 2
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -500
    }
		if(!player.body.touching.down){
			player.animations.play('jump')
		}
}
