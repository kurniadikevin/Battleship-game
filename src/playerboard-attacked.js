import {playerGridCons,playerShip} from './playership-placement';


export const randomAttacked = function(){
    let hitCountP = 0;
    let shipCountP = 17;// clone of player ship but constant variable
    let gridSize = 10;

    let randomRow =  Math.floor(Math.random()* (gridSize));
    let randomCol =  Math.floor(Math.random()* (gridSize));

    // ship got shot
    if(playerGridCons[randomRow][randomCol] === ' s ' ){
        hitCountP++;
        playerShip--;
        const playerDec = document.querySelector('.player-dec');
        playerDec.textContent = 'Player Ship left: '+ (playerShip); // declaration for ship count
        playerGridCons[randomRow][randomCol] = ' x ';
        // target style background change for ui
        let playerGrid = document.getElementById(`p${randomRow}${randomCol}`);
        playerGrid.style.backgroundColor='var(--orange)';
        if(hitCountP === shipCountP || playerShip === 0){
           // alert(' all your ship is sunk , you Lose!');
            const alertBox = document.querySelector('#alert-box');
            alertBox.textContent=' all your ship is sunk , you Lose!';
        }
    }
    else if(playerGridCons[randomRow][randomCol]=== ' . '){
        playerGridCons[randomRow][randomCol] = ' x ';
        // target style background change for ui
        let playerGrid = document.getElementById(`p${randomRow}${randomCol}`);
        playerGrid.style.backgroundColor='var(--black1)';
    }
    else if( playerGridCons[randomRow][randomCol] === ' x ' ){
        randomAttacked();
        //let newRandomRow = Math.floor(Math.random()* (gridSize));
        //let newRandomCol = Math.floor(Math.random()* (gridSize));
        //playerGridCons[newRandomRow][newRandomCol]
        //alert('enemy shot the same spot');// this case need to be not happen
    }
}