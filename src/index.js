import './style.css';

import { makeEnemyGrid, makePlayerGrid} from "./gameboard-ui";
import {makeGridData} from './enemyboard-data-funct';
import {makeGridDataPlayer} from './playerBoard-function';

console.log('hello world212121');// test log
//let size = prompt('grid size?');

// player board
makePlayerGrid(10);
makeGridDataPlayer(10);


// enemy board
makeEnemyGrid(10);
makeGridData(10);
