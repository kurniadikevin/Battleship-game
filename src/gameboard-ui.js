import {main} from './dom';

export const makeGameGrid = function(size){
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size},40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},40px)`;
    main.appendChild(gridContainer);
    
    for( let i=0; i<  size; i++){
        for( let j =0 ; j < size; j++){
            const grid = document.createElement('div');
            grid.id  = 'g' + i + j;
            grid.style.border = '2px solid white';
            gridContainer.appendChild(grid);
        }
    }
}