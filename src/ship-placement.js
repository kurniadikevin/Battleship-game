import { gameGridCons } from "./gameboard-data-funct";
export const shipPlacement = function(){
    const shipPlaceLoop = function(totalShip,gridSize,shipLength){
        for ( let i=0; i< totalShip; i++){
            let randomIndexRow =   Math.floor(Math.random()* (gridSize));// 
            let randomIndexCol =  Math.floor(Math.random()* (gridSize));// 
          if(randomIndexRow > (gridSize - shipLength)){
               for(let j=0; j< shipLength; j++){
                gameGridCons [randomIndexRow-j][randomIndexCol] = ' s ';
            }}
          else if(randomIndexCol > (gridSize - shipLength)){
               for(let j=0; j< shipLength; j++){
                gameGridCons [randomIndexRow][randomIndexCol-j] = ' s ';
            }}
           else if(randomIndexCol < (gridSize - shipLength)){
               for(let j=0; j< shipLength; j++){
                gameGridCons [randomIndexRow][randomIndexCol+j] = ' s ';
            }}
          else{
            for(let j=0; j< shipLength; j++){
                gameGridCons [randomIndexRow+j][randomIndexCol] = ' s ';
            }
          }
        }     
    }
    
    shipPlaceLoop(1,10,5);
    shipPlaceLoop(1,10,4);
    shipPlaceLoop(2,10,3);
    shipPlaceLoop(1,10,2);
}