class Init extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    // 외부 데이터 로드
    preload ()
    {
      // phaser labs url
      this.load.setBaseURL("https://labs.phaser.io/src/games/firstgame/");

      this.load.image('sky', 'assets/sky.png');
      this.load.image('ground', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.spritesheet('dude', 'assets/dude.png', {
        frameWidth: 32,
        frameHeight: 48,
      });
    }

    // 오브젝트 생성
    create ()
    {
      this.add.image(400,300, 'sky');
      // 땅을 생성
      platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'normal',
        frames:[{ 
          key: 'dude', frame: 4 
        }],
        frameRate: 20
      })

      // 유저 생성
      player = this.physics.add.sprite(100, 450, 'dude');
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      // 유저 중력 가속
      player.body.setGravityY(300);

      // 플랫폼 위에 착지
      this.physics.add.collider(player, platforms);

      //this.add.image(400,300, 'star');
      this.cursors = this.input.keyboard.createCursorKeys();
      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      
      // 2단점프 체크용
      this.jump_count = 0;
    }

    update() 
    {
      
      if(this.cursors.left.isDown) {
        player.setVelocityX(-200);
        player.anims.play('left', true);
      } else if(this.cursors.right.isDown) {
        player.setVelocityX(200);
        player.anims.play('right', true);
      } else {
        player.setVelocityX(0);
        player.anims.play('normal');
      }

      if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
        if(!player.body.touching.none){
          this.jump_count = 0;
        }        
        if(this.jump_count < 2) {
          player.setVelocityY(-1000);
          this.jump_count++;
        }
        console.log(this.jump_count);
      }
    }
}