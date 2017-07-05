

// 这是我们的玩家要躲避的敌人
var Enemy = function(x,y,v) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x=x;
    this.y=y;
    this.v=v;
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x=this.x+this.v*dt;
    if(this.x > 505) {
        this.x = enemyInitialX;
        var max = 500;
        var min = 100;
        this.v = Math.floor(Math.random() * (max - min + 1) + min);
    }

};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(){
    this.sprite='images/char-boy.png';
    this.x=202;
    this.y=400;
};
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.update = function(){

};
Player.prototype.handleInput=function(direction){
    if(this.y > 68 && this.y <= 400){
        if(direction==='up'){
            this.y=this.y-83;
        }
    }
    if(this.y >= 68 && this.y < 400){
        if(direction==='down'){
            this.y=this.y+83;
        }
    }
    if(this.x > 0 && this.x <= 404){
        if(direction==='left'){
            this.x=this.x-101;
        }
    }
    if(this.x >= 0 && this.x < 404){
        if(direction==='right'){
            this.x=this.x+101;
        }
    }
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面

var enemyInitialX = 0;
var enemyInitialY = 68;

var allEnemies = [
    new Enemy(enemyInitialX,enemyInitialY,120),
    new Enemy(enemyInitialX,enemyInitialY + 83,150),
    new Enemy(enemyInitialX,enemyInitialY + 83 * 2,100)
];

var player = new Player();

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
