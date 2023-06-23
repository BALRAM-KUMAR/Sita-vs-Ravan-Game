score = 0;
cross = true;

audio = new Audio('mps.mp3')
audiogo = new Audio('ram_ev33QWmH.mp3')
  

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        ravan = document.querySelector('.ravan');
        ravan.classList.add('animateRavan');
        audio.play();
        setTimeout(() => {
            ravan.classList.remove('animateRavan')
        }, 700);
    }

    if (e.keyCode == 39) {
        ravan = document.querySelector('.ravan');
        ravanX = parseInt(window.getComputedStyle(ravan, null).getPropertyValue('left'));
        ravan.style.left = ravanX + 112 + "px";
    }
    if (e.keyCode == 37) {
        ravan = document.querySelector('.ravan');
        ravanX = parseInt(window.getComputedStyle(ravan, null).getPropertyValue('left'));
        ravan.style.left = (ravanX - 150) + "px";
    }
}

setInterval(() => {
    ravan = document.querySelector('.ravan');
    gameOver = document.querySelector('.gameOver');
    sitamata = document.querySelector('.sitamata');

    rx = parseInt(window.getComputedStyle(ravan, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(ravan, null).getPropertyValue('top'));

    sx = parseInt(window.getComputedStyle(sitamata, null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(sitamata, null).getPropertyValue('top'));

    offsetX = Math.abs(rx - sx);
    offsetY = Math.abs(ry - sy);
    console.log(offsetX, offsetY);
    if (offsetX < 150 && offsetY < 110) {
        gameOver.style.visibility = 'visible';
        sitamata.classList.remove('sitamataAni')
        audiogo.play(); 
        setTimeout(() => {
            audiogo.pause();
        }, 5000);
        
        audio.pause();
       
    }
    else if (offsetX < 245 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100);

function updateScore(score) {
    scoreCont.innerHTML = " Your Score: " + score;
}