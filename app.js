//Load Assets
function loadTexture(path) {
    return new Promise((resolve) => {
        const img = path;
        img.onload = () => {
            resolve(img);
        }
    })
}

function createEnemies(ctx, canvas, enemyImg) {
    //Constants declaration
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;

    //Draw image
    for(let x = START_X; x < STOP_X; x+=98){
        for(let y = 0; y<50 * 5; y+=50){
            ctx.drawImage(enemyImg, x, y);
        }
    }
}

window.onload = async() => {
    //Getting the canvas and context from HTML document
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    const heroImg = await loadTexture('/assets/mainPlayer.png');
    const enemyImg = await loadTexture('/assets/enemyPlayer.png')

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(heroImg, canvas.width/2 - 45, canvas.height - (canvas.height/4));
    createEnemies(ctx, canvas, enemyImg);
}