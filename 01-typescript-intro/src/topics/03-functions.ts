


// function addNumbers(a:number, b:number) {
//     return a+b;
// }

// const addNumbersArrow = (a:number, b:number) =>{
// return `${a + b}` ;
// }
 
// const multiply = (firstNumber: number, secondNumber?: number, base: number =2 ): number => {
//     return firstNumber*base;
// }



interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}


const healCharacter = (character: Character,amount: number) => {


    character.hp += amount;
}

const Strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp: function() {
        console.log(`Puntos de vida : ${this.hp}`);
    }
}



healCharacter(Strider, 50);

Strider.showHp();

// const result2:string =addNumbersArrow(1,2);
// const result: number = multiply(5);
// console.log({result, result2})


export {}