const ball = document.getElementById('ball');
let position = { x: 50, y: 50 };
let velocity = { x: 2, y: 2 };
const speed = 5;
const ballRadius = 25;
const width = window.innerWidth;
const height = window.innerHeight;

function moveBall() {
    // 更新小球的位置
    position.x += velocity.x;
    position.y += velocity.y;

    // 检测碰撞并反弹
    if (position.x - ballRadius < 0 || position.x + ballRadius > width) {
        velocity.x = -velocity.x;
    }
    if (position.y - ballRadius < 0 || position.y + ballRadius > height) {
        velocity.y = -velocity.y;
    }

    // 更新小球的位置
    ball.style.left = `${position.x}px`;
    ball.style.top = `${position.y}px`;

    // 递归调用moveBall函数
    requestAnimationFrame(moveBall);
}

// 开始移动小球
moveBall();
