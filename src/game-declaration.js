import { footer } from "./dom";
import { playerShip } from "./playership-placement";

let playerDeclaration = document.createElement('div');
playerDeclaration.classList.add('player-dec');
let enemyDeclaration = document.createElement('div');
enemyDeclaration.classList.add('enemy-dec');
export let enemyShipCount = 17;

export const playerShipDec = function(){
       playerDeclaration.textContent = `Player Ship count: ${playerShip}`;
    footer.appendChild(playerDeclaration);
 }

 export const enemyShipDec = function(){
    enemyDeclaration.textContent = `Enemy Ship count: ${enemyShipCount}`;
 footer.appendChild(enemyDeclaration);
}