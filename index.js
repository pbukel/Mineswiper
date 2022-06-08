"use strict";
const placeholder = document.querySelector('.placeholder');
const result = document.querySelector('.result');
const gameover = document.querySelector('.game_over');
const restart = document.querySelector('.play_again');
let array = [];
let counter = 0;
let Gameover = false;
let kavadrateliuSkaicius = 100;
// iskvieciame funkcija
createGrid(kavadrateliuSkaicius);
function createGrid(gridas) {
    placeholder.innerHTML = "";
    gameover.innerHTML = "";
    result.innerText = `${counter}`;
    //sukuriam kvadratelius
    for (let x = 1; x <= gridas; x++) {
        let divas = document.createElement('div');
        divas.classList.add('squere');
        placeholder.append(divas);
    }
    //sugenneruojame indexus kvadrateliu su bombomis  
    for (let i = 1; i <= kavadrateliuSkaicius / 10; i++) {
        let number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        array.push(number);
    }
    const bomba = document.querySelectorAll('.squere');
    //idedam bombas
    for (let y of array) {
        bomba[y].classList.add('bomba');
    }
    clikinam(bomba, array);
    // console.log(array);
}
function clikinam(param, arr) {
    for (let x of param) {
        x.onclick = (e) => {
            if (Gameover) {
                return;
            }
            //@ts-ignore
            if (e.target.className.includes("selected")) {
                return;
            }
            //@ts-ignore
            if (e.target.className.includes("bomba")) {
                console.log('bomba');
                x.classList.add('red');
                gameover.innerHTML = "GAME OVER";
                Gameover = true;
                showAllBombs2(param, arr);
            }
            else {
                x.classList.add('green');
                x.classList.add('selected');
                counter++;
                result.innerText = `${counter}`;
            }
            // console.log(e.target.className);
        };
    }
    // showAllBombs(param, arr)
}
// function showAllBombs(param:NodeListOf<HTMLElement>, array:number[]){
//   for (let y of array){
//     param[y].classList.add('grey')
//   }
// }
function showAllBombs2(param, array) {
    for (let y of array) {
        param[y].classList.remove('grey');
        param[y].classList.add('red');
    }
}
restart.onclick = () => {
    array = [];
    counter = 0;
    Gameover = false;
    kavadrateliuSkaicius = 100;
    createGrid(kavadrateliuSkaicius);
};
