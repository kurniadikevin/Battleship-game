import {shipPlacement} from './enemyship-placement';
import { randomAttacked } from './playerboard-attacked';
import { enemyShipCount } from './game-declaration';

// make grid data on console
export let gameGridCons = [];
 // hit count
 let hitCount = 0;
 let numberOfShip = 17;

// computer board 
export const makeGridData = function (size){
  for (let i=0; i< size; i++){
        gameGridCons[i]=[' . '];   
        for(let j = 0; j< size; j++){
            gameGridCons[i][j]= ' . ';
        }
    }
    shipPlacement(); //add ship
    console.log(gameGridCons);
    CgameBoardFunc();
  }


//game function on grid
export const CgameBoardFunc = function(){
    const gridContainerC= document.querySelector('.grid-containerC');
    gridContainerC.addEventListener('click',fireAttack,false);
}


// fire click function
const fireAttack = function(e){
    if(e.target !== e.currentTarget){
        let row = e.target.id.substring(1,2);
		let col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
    
        if(gameGridCons[row][col] === ' . '){
            e.target.style.backgroundColor = 'white';
            gameGridCons[row][col] = ' o ';
            const alertBox = document.querySelector('#alert-box');
            alertBox.textContent='Game on!';
        }
         else if (gameGridCons[row][col] === ' o ' || gameGridCons[row][col] === ' x ' ){
           // alert('You already hit the same spot!');
            const alertBox = document.querySelector('#alert-box');
            alertBox.textContent='You already hit the same spot!';
            fireAttack();
        }
         else if(gameGridCons[row][col] = ' s '){
            e.target.style.backgroundColor = 'var(--orange)';
            gameGridCons[row][col] = ' x ';
           hitCount++;
           const alertBox = document.querySelector('#alert-box');
           alertBox.textContent='You hit enemy ship!';
           //declaration ship count
           enemyShipCount--;
           const enemyDec = document.querySelector('.enemy-dec');
            enemyDec.textContent = 'Enemy Ship left:' + enemyShipCount;
           // hit count using 5 ship
           if(hitCount === numberOfShip){
            e.target.style.backgroundColor = 'red';
            gameGridCons[row][col] = ' x ';
            //alert('Congrats you win all enemy ship is sunk!');
            const alertBox = document.querySelector('#alert-box');
           alertBox.textContent='You win! All enemy ship sink';
           }
        }
        console.log( gameGridCons);
        console.log('hit count: '+ hitCount);
    } 
    e.stopPropagation();   
  setTimeout( randomAttacked,1000);
}