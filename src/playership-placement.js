import {  playerShipDec } from "./game-declaration";

export let playerGridCons = [];
export let playerShip = 0;
    
export const makeGridDataPlayer = function (size){
    for (let i=0; i< size; i++){
          playerGridCons[i]=[' . '];   
          for(let j = 0; j< size; j++){
              playerGridCons[i][j]= ' . ';
          }
      }
      // make placement on your ship
     pGameBoardFunc() 
     console.log(playerGridCons);
    
    }
  
    const pGameBoardFunc = function(){
        const gridContainerP= document.querySelector('.grid-containerP');
        gridContainerP.addEventListener('click',placeYourShip,false);
    }
    
    // click to place ship
    const placeYourShip = function(e){
        if(e.target !== e.currentTarget){
            let row = e.target.id.substring(1,2);
            let col = e.target.id.substring(2,3);
            //alert("Clicked on row " + row + ", col " + col);
            if( playerGridCons[row][col] === ' . ' && playerShip < 17){
                e.target.style.backgroundColor = 'white';
                playerGridCons[row][col] = ' s ';
                playerShip++;
                const alertBox = document.querySelector('#alert-box');
                alertBox.textContent='Place all your 17 ship to start!';
                if(playerShip === 17){
                   // alert('your place all 17 boat!')
                   const alertBox = document.querySelector('#alert-box');
                   alertBox.textContent='Game Start!';
                }
            }
            
           else if (playerGridCons[row][col] === ' s '){
                //alert('you already hit the same spot!');
                const alertBox = document.querySelector('#alert-box');
                alertBox.textContent='You already hit the same spot!'
            } 
            
        }
        // console.log( playerGridCons);
         //console.log('ship count: '+ playerShip);
         e.stopPropagation();     
         playerShipDec();//

         
    }