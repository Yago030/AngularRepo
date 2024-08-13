
function classDecorator (
    constructor: any

){
    return class extends constructor{
        newProperty = 'New Property';
        hello = "Overide";
    }
}





class SuperClass{

    public myProperty: string = 'Abc123';


    print(){
        console.log('Hola Mundo ');
    }

}




console.log(SuperClass)


const myClass = new SuperClass

console.log (myClass)