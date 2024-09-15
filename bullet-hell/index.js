const canvas = document.querySelector('#game')
const start_button = document.querySelector('.start')
const main_display = document.querySelector('.main')
const backgroundSound = document.getElementById('backgroundSound')

window.addEventListener('load',()=>{backgroundSound.play()})
const ctx = canvas.getContext('2d')
const playerImg = new Image()
const enemyImg = new Image()
playerImg.src='./images/1.png'
enemyImg.src='./images/2.png'
let player = {
    x: canvas.width / 2 -20,
    y: canvas.height - 30 - 7.5,
    width: 40,
    height: 15,
    speed: 2
}

let bullets = []
let enemies = []
let enemyBullets = []
let score = 0
let time = new Date()
let gameStarted = false
const keys = {
    left: false,
    right: false,
    up: false,
    down: false
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') keys.left = true
    if (e.code === 'ArrowRight') keys.right = true
    if (e.code === 'ArrowUp') keys.up = true
    if (e.code === 'ArrowDown') keys.down = true
})

document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft') keys.left = false
    if (e.code === 'ArrowRight') keys.right = false
    if (e.code === 'ArrowUp') keys.up = false
    if (e.code === 'ArrowDown') keys.down = false
    if (e.code === 'Space')
        createBullet()
})
const createBullet=()=>{
    const shootSound = new Audio('./audios/MP_jab.mp3')
    shootSound.volume=0.2
    shootSound.play()
    const bullet = {
        x: player.x + player.width / 2,
        y: player.y,
        speed: 3,
        width: 5,
        height: 5,
        color: 'blue'
    }
    bullets.push(bullet)
}
const updateBullets=()=>{
    bullets.forEach((bullet,index)=>{
        bullet.y-=bullet.speed/2
        if(bullet.y<0)
            bullets.splice(index,1)
    })
}
const drawBullets=()=>{
    bullets.forEach((bullet)=>{
        ctx.fillStyle=bullet.color
        ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height)
    })
}

const updatePlayer=()=> {
    if (keys.left && player.x > 0) player.x -= player.speed
    if (keys.right && player.x + player.width < canvas.width) player.x += player.speed
    if (keys.up && player.y > 0) player.y -= player.speed/2
    if (keys.down && player.y + player.height < canvas.height) player.y += player.speed/2
}

const drawPlayer=()=> {
    ctx.drawImage(playerImg,player.x,player.y,player.width,player.height)
}

const createEnemy=()=> {
    const enemy = {
        x: Math.random() * (canvas.width - 30),
        y: 0,
        width: 30,
        height: 10,
        speed: 2,
    }
    enemies.push(enemy)
}

const updateEnemies=()=> {
    enemies.forEach((enemy, index) => {
        enemy.y += enemy.speed/2

        if (enemy.y > canvas.height)
            enemies.splice(index, 1)

        if (Math.random() < 0.02) {
            const bullet = {
                x: enemy.x + enemy.width / 2,
                y: enemy.y + enemy.height,
                speed: 3,
                width: 5,
                height: 5,
                color: 'yellow'
            }
            enemyBullets.push(bullet)
        }
    })
}

const drawEnemies=()=> {
    enemies.forEach(enemy => {
        ctx.drawImage(enemyImg,enemy.x,enemy.y,enemy.width,enemy.height)
    })
}

const updateEnemyBullets=()=> {
    enemyBullets.forEach((bullet, index) => {
        bullet.y += bullet.speed/2

        if (bullet.y > canvas.height)
            enemyBullets.splice(index, 1)
    })
}

const drawEnemyBullets=()=> {
    enemyBullets.forEach(bullet => {
        ctx.fillStyle = bullet.color
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height)
    })
}
const isCollision=()=>{
    for(let enemy of enemies){
        if(player.x<enemy.x+enemy.width/3*2 &&
            player.x+player.width>enemy.x+enemy.width/3&&
            player.y<enemy.y+enemy.height/3*2&&
            player.y+player.height>enemy.y+enemy.height/3
        )
        return true
    }

    for(let bullet of enemyBullets){
        if(player.x<=bullet.x+bullet.width/3*2 &&
            player.x+player.width>=bullet.x+bullet.width/3&&
            player.y<=bullet.y+bullet.height/3*2&&
            player.y+player.height>=bullet.y+bullet.height/3
        )
        return true
    }

    return false
}
const isEnemyCollision=()=>{
    for(let bullet of bullets){
        for(let index in enemies){
            if(enemies[index].x<=bullet.x+bullet.width/3*2 &&
                enemies[index].x+enemies[index].width>=bullet.x+bullet.width/3&&
                enemies[index].y<=bullet.y+bullet.height/3*2&&
                enemies[index].y+enemies[index].height>=bullet.y+bullet.height/3
            ){
                enemies.splice(index,1)
                score+=100
            }
        }
    }

    return false
}
const drawScore =(x,y)=>{
    let currentTime = new Date()
    let diff = currentTime-time
    score+=Math.ceil(diff/100)
    time=currentTime
    ctx.fillStyle='white'
    ctx.font='10px Arial'
    ctx.fillText(`${score}`,x,y)
}
const gameLoop =()=> {
    if(isCollision()){
        const gameOverSound=new Audio('./audios/loose.mp3')
        gameOverSound.play()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle='white'
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Game Over',canvas.width/2,canvas.height/2)
        ctx.font='10px Arial'
        ctx.fillText(`Score: ${score}`,canvas.width/2,canvas.height/2+15)
        setTimeout(()=>{
            main_display.style.visibility='visible'
            start_button.textContent='RESTART'
            bullets = []
            enemies = []
            enemyBullets = []
            score = 0
            gameStarted=false
        },3000)
        return
    }
    if(isEnemyCollision()){
        
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    updatePlayer()
    drawPlayer()

    updateBullets()
    drawBullets()
    updateEnemies()
    drawEnemies()
    updateEnemyBullets()
    drawEnemyBullets()

    if(Math.random() < 0.03) 
        createEnemy()

    drawScore(20,10)

    requestAnimationFrame(gameLoop)
}

start_button.addEventListener('click',()=>{
    if(!gameStarted){
        gameLoop()
        gameStarted=true
        time = new Date()
        main_display.style.visibility = 'hidden'
    }
})