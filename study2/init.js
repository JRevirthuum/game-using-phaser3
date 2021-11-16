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
    }
}