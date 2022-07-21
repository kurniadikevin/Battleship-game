import { testImport } from "./function-example";//
import './style.css';

import { makeGameGrid} from "./gameboard-ui";
import {makeGridData} from './gameboard-data-funct';

testImport();

console.log('hello world22222');

let size = prompt('grid size?');
makeGameGrid(size);
makeGridData(size);
