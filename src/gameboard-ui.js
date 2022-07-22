import {main} from './dom';

export const makeEnemyGrid = function(size){
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-containerC');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size},40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},40px)`;
    main.appendChild(gridContainer);
    
    for( let i=0; i<  size; i++){
        for( let j =0 ; j < size; j++){
            const gridC = document.createElement('div');
            gridC.id  = 'g' + i + j;
            gridC.style.border = '2px solid white';
            gridContainer.appendChild(gridC);
        }
    }
    const gridNameEnemy = document.createElement('div');
    gridNameEnemy.classList.add('enemy-title');
    gridNameEnemy.textContent='Enemy Board';
    gridContainer.appendChild(gridNameEnemy);
}

export const makePlayerGrid = function(size){
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-containerP');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size},40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},40px)`;
    main.appendChild(gridContainer);
    
    for( let i=0; i<  size; i++){
        for( let j =0 ; j < size; j++){
            const gridP = document.createElement('div');
            gridP.id  = 'p' + i + j;
            gridP.style.border = '2px solid gray';
            gridContainer.appendChild(gridP);
        }
    }
    const gridNamePlayer = document.createElement('div');
    gridNamePlayer.classList.add('player-title');
    gridNamePlayer.textContent='Player Board';
    gridContainer.appendChild(gridNamePlayer);
}