
let playerGridCons = [];
let playerShip = 0;
    
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
    
    // fire click function
    const placeYourShip = function(e){
        if(e.target !== e.currentTarget){
            let row = e.target.id.substring(1,2);
            let col = e.target.id.substring(2,3);
            //alert("Clicked on row " + row + ", col " + col);
            if( playerGridCons[row][col] === ' . '){
                e.target.style.backgroundColor = 'green';
                playerGridCons[row][col] = ' s ';
                playerShip++;
                if(playerShip === 17){
                    alert('your place all 17 boat!')
                }
            }
            
           else if (playerGridCons[row][col] === ' s '){
                alert('you already hit the same spot!')
            } 
            
        }
            
            console.log( playerGridCons);
            console.log('ship count: '+ playerShip);
         
         e.stopPropagation();   
    }