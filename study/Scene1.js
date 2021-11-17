class Scene1 extends Phaser.Scene
{
  constructor()
  {
    super('bootGame');
  }

  preload()
  {
    this.load.image('background', '../assets/images/background.png');
    //this.load.image('ship', '../assets/images/ship.png');
    this.load.spritesheet('ship', '../assets/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    //this.load.image('ship2', '../assets/images/ship2.png');
    this.load.spritesheet('ship2', '../assets/spritesheets/ship2.png', {
      frameWidth: 32,
      frameHeight: 16,
    });
    //this.load.image('ship3', '../assets/images/ship3.png');
    this.load.spritesheet('ship3', '../assets/spritesheets/ship3.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('explosion', '../assets/spritesheets/explosion.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('power-up', '../assets/spritesheets/power-up.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    // 플레이어.
    this.load.spritesheet('player', '../assets/spritesheets/player.png', {
      frameWidth: 16,
      frameHeight: 24,
    });

    // 총알
    this.load.spritesheet('beam', '../assets/spritesheets/beam.png', {
      frameWidth: 16,
      frameHeight: 16, 
    });

    // 비트맵 폰트 로드
    this.load.bitmapFont('pixelFont', '../assets/font/font.png', '../assets/font/font.xml');

    // 빔, 폭발, 에너지, 브금 사운드 다운로드
    // this.load.audio('audio_beam', ['../assets/sounds/beam.ogg', '../assets/sounds/beam.mp3']);
    // this.load.audio('audio_explosion', ['../assets/sounds/explosion.ogg', '../assets/sounds/explosion.mp3']);
    // this.load.audio('audio_pickup', ['../assets/sounds/pickup.ogg', '../assets/sounds/pickup.mp3']);
    // this.load.audio('music', ['../assets/sounds/sci-fi_platformer12.ogg', '../assets/sounds/sci-fi_platformer12.mp3']);
  }

  create()
  {
    this.add.text(20, 20, "Loading game...");

    this.anims.create({
      key: 'ship1_anim',
      frames: this.anims.generateFrameNumbers('ship'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship2_anim',
      frames: this.anims.generateFrameNumbers('ship2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship3_anim',
      frames: this.anims.generateFrameNumbers('ship3'),
      frameRate: 20,
      repeat: -1,
    });

    // 폭발 추가
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('power-up', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'grey',
      frames: this.anims.generateFrameNumbers('power-up', {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1,
    });

    // 총알 애니메이션 클립 생성
    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam'),
      frameRate: 20,
      repeat: -1
    });

    // 로딩 완료후 스테이지 시작
    this.scene.start('playGame');
  }
}