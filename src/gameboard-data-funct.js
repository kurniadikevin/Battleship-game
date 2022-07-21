
// make grid data on console
let gameGridCons = [];

 // hit count
 let hitCount = 0;
export const makeGridData = function (size){
  for (let i=0; i< size; i++){
        gameGridCons[i]=[' . '];   
        for(let j = 0; j< size; j++){
            gameGridCons[i][j]= ' . ';
        }
    }
    //add ship
    gameGridCons[0][0] = ' s ';
    gameGridCons[2][4] = ' s ';
    gameGridCons[0][1] = ' s ';
    gameGridCons[3][2] = ' s ';
    gameGridCons[2][0] = ' s ';// total 5 ship
    
    console.log(gameGridCons);
    gameBoardFunc();
  }

//game function on grid
export const gameBoardFunc = function(){
    const gridContainer= document.querySelector('.grid-container');
    gridContainer.addEventListener('click',fireAttack,false);
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
        }
         else if (gameGridCons[row][col] === ' o '){
            alert('you already hit the same spot!')
        }
         else if(gameGridCons[row][col] = ' s'){
            e.target.style.backgroundColor = 'red';
            gameGridCons[row][col] = ' x ';
           hitCount++;
           // hit count using 5 ship
           if(hitCount === 5){
               alert('all five ship is sink');
           }
        }
        console.log( gameGridCons);
        console.log('hit count: '+ hitCount);
    } 
    e.stopPropagation();   
}