let scoreCount = 0;
    score1Count = 0;
    score2Count = 0;
    currentPlayer = 1;
    player1 = document.getElementById('point1');
    player2 = document.getElementById('point2');

const rollButt = document.getElementById('roll');
      restartButt = document.getElementById('restart');
      newGame = document.getElementById('new');

restartButt.addEventListener('click', ()=> {
    scoreCount = 0;
    score1Count = 0;
    score2Count = 0;
    currentPlayer = 1;
    document.getElementById('condition').innerHTML = ``;
    document.getElementById('update').innerHTML = ``;
    document.getElementById('score').innerHTML = '> SCORE <';
    document.getElementById('score1').innerHTML = 'PLAYER ONE<br>> SCORE <';
    document.getElementById('score2').innerHTML = 'PLAYER TWO<br>> SCORE <';
    roll.style.visibility = 'visible';
    restart.style.visibility = 'hidden';
    player1.style.visibility = 'visible';
    player2.style.visibility = 'hidden';
});

newGame.addEventListener('click', ()=> {
    scoreCount = 0;
    score1Count = 0;
    score2Count = 0;
    currentPlayer = 1;
    document.getElementById('condition').innerHTML = ``;
    document.getElementById('update').innerHTML = ``;
    document.getElementById('score').innerHTML = '> SCORE <';
    document.getElementById('score1').innerHTML = 'PLAYER ONE<br>> SCORE <';
    document.getElementById('score2').innerHTML = 'PLAYER TWO<br>> SCORE <';
    roll.style.visibility = 'visible';
    restart.style.visibility = 'hidden';
    player1.style.visibility = 'visible';
    player2.style.visibility = 'hidden';
});


////////////////////////////////////////////////////////////////////////
rollButt.addEventListener("click", ()=> {
    if(document.getElementById('score').style.display == 'block') {
        let result = Math.floor(Math.random() * 6) + 1;
        if(result>1){
            scoreCount += result;
            document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
            document.getElementById('score').innerHTML = `${scoreCount}`;

            if(scoreCount>=20){
                document.getElementById('update').innerHTML = `WINNER!!! YOU SCORED A TOTAL OF ${scoreCount}!`;
                scoreCount = 0;
                rollButt.style.visibility = 'hidden';
                restartButt.style.visibility = 'visible';
            };
        } else if(result==1){
            scoreCount = 0;
            document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
            document.getElementById('score').innerHTML = `${scoreCount}`;
            document.getElementById('update').innerHTML = `YOU LOSE!!!`;
            rollButt.style.visibility = 'hidden';
            restartButt.style.visibility = 'visible';
        } else {
            document.getElementById('condition').innerHTML = `SOMETHING WENT WRONG, TRY AGAIN`;
        }
    } else {
        let result = Math.floor(Math.random() * 6) + 1;

        if(result>1){

            if(currentPlayer == 1){
             score1Count += result;
             document.getElementById('score1').innerHTML = `PLAYER ONE<br>${score1Count}`;
             document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
            } else {
                score2Count += result;
                document.getElementById('score2').innerHTML = `PLAYER TWO<br>${score2Count}`;
                document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
            };

            if(score1Count>=20 || score2Count>=20){
                if(currentPlayer == 1){
                    document.getElementById('update').innerHTML = `PLAYER ONE WINS!!!`;
                } else {
                    document.getElementById('update').innerHTML = `PLAYER TWO WINS!!!`;
                };
                rollButt.style.visibility = 'hidden';
                restartButt.style.visibility = 'visible';
            };

        } else if(result==1){
            if(currentPlayer == 1){
                score1Count = 0;
                document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
                document.getElementById('score1').innerHTML = `PLAYER ONE<br>${score1Count}`;
                document.getElementById('update').innerHTML = `YOU LOSE, PLAYER TWO WINS!!!`;
                rollButt.style.visibility = 'hidden';
                restartButt.style.visibility = 'visible';
            } else {
                score2Count = 0;
                document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
                document.getElementById('score2').innerHTML = `PLAYER TWO<br>${score2Count}`;
                document.getElementById('update').innerHTML = `YOU LOSE, PLAYER ONE WINS!!!`;
                rollButt.style.visibility = 'hidden';
                restartButt.style.visibility = 'visible';
            };
        } else {
            document.getElementById('condition').innerHTML = `SOMETHING WENT WRONG, TRY AGAIN`;
        }
    };
});
////////////////////////////////////////////////////////////////////////

function holdButt () {
    if(currentPlayer == 1){
        currentPlayer = 2
        player1.style.visibility = 'hidden';
        player2.style.visibility = 'visible';
    } else {
        currentPlayer = 1
        player1.style.visibility = 'visible';
        player2.style.visibility = 'hidden';
    }
};

function themeButt () {
    let change = document.getElementById("container");
        change2 = document.getElementById("game");
        change3 = document.getElementById("buttNaked");
        change4 = document.getElementById("info");
        change5 = document.getElementById("roll");
        change6 = document.getElementById("restart");

    change.classList.toggle("theme");
    change2.classList.toggle("theme");
    change3.classList.toggle("theme");
    change4.classList.toggle("theme");
    change5.classList.toggle("theme");
    change6.classList.toggle("theme");
};

document.getElementById('score').style.display = 'block';
function playerButt () {
    if(document.getElementById('score').style.display === 'block'){
        document.getElementById('score').style.display = 'none';
        document.getElementById('twoPlayer').style.display = 'flex';
    } else {
        console.log('wlefvwlfg');
        document.getElementById('twoPlayer').style.display = 'none';
        document.getElementById('score').style.display = 'block';
    }
};