export  class Person {

    constructor (
         public name:string,
         public address: string
        ){ }

}

export class Hero extends Person{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ){
        super('Ironman', 'New York');
    }

}


const ironman = new Hero('Batman', 45, 'Tony Stark');

console.table(ironman)