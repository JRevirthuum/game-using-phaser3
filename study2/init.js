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


      // 유저 생성
      player = this.physics.add.sprite(100, 450, 'dude');
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      // 유저 중력 가속
      player.body.setGravityY(300);

      // 플랫폼 위에 착지
      this.physics.add.collider(player, platforms);

      //this.add.image(400,300, 'star');
    }
}