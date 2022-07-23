import {playerGridCons} from './playership-placement';

export const randomAttacked = function(){
    let hitCountP = 0;
    let shipCountP = 17;
    let gridSize = 10;

    let randomRow =  Math.floor(Math.random()* (gridSize));
    let randomCol =  Math.floor(Math.random()* (gridSize));

    // ship got shot
    if(playerGridCons[randomRow][randomCol] === ' s ' ){
        hitCountP++;
        playerGridCons[randomRow][randomCol] = ' x ';
        // target style background change for ui
        let playerGrid = document.getElementById(`p${randomRow}${randomCol}`);
        playerGrid.style.backgroundColor='red';
        if(hitCountP === shipCountP){
            alert(' all your ship is sunk , you Lose!');
        }
    }
    else if(playerGridCons[randomRow][randomCol]=== ' . '){
        playerGridCons[randomRow][randomCol] = ' x ';
        // target style background change for ui
        let playerGrid = document.getElementById(`p${randomRow}${randomCol}`);
        playerGrid.style.backgroundColor='white';
    }
    else if( playerGridCons[randomRow][randomCol] === ' x ' ){
        let newRandomRow = Math.floor(Math.random()* (gridSize));
        let newRandomCol = Math.floor(Math.random()* (gridSize));
        //playerGridCons[newRandomRow][newRandomCol]
        alert('enemy shot the same spot');// this case need to be not happen
    }
}