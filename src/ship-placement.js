import { gameGridCons } from "./gameboard-data-funct";
export const shipPlacement = function(totalShip,gridSize){
    for ( let i=0; i< totalShip; i++){
        let randomIndexRow =   Math.floor(Math.random()* (gridSize));// 
        let randomIndexCol =  Math.floor(Math.random()* (gridSize));// 
        gameGridCons [randomIndexRow][randomIndexCol] = ' s ';
    }
}