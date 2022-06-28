// let sales :number = 123_456_789
//? let sales = 123_456_789;
// let course = "TypeScript";
// let published = true;
// let level;  // any type

//? let arr:number[] = [1,2,3]
//? let arr = [1,2,3]  => number[] type
//? let arr =[]          => any type


//! *** truple ***
// truple are new dataType introduce in TypeScript can contain two values different data Types.
//? let truple: [number,string] = [3,'gopi']
// ?truple[0] = 4; // index 0 is a number and we asign the number here so no error happen here
// ?truple[1] = 5;  // index 1 is string value so here we assign the number value so this shows an error
// ?truple[2] = "f" // dont have 2 space in truple its throw an a error
// console.log(truple)

//! ***Enums***
// const small = 1;
// const medium = 2;
// const large = 3;

//PascallCase naming convenstion for enum

// enum Size {Small,Medium,Large}   // by default enum Size {Small = 0, Medium = 1, Large =2}
//?  const enum Size {Small = 1,Medium,Large}   // now we set enum Size {Small = 1, Medium = 2, Large =3}
 // without const we have to much code in index.js file so we prevent to that we use const here
// complier generate more optimizzed the code use const
//?  let mySize:Size = Size.Medium
//?  console.log(mySize)


//! *** Functions ***
// setTrue options : in TypeChecking feild
    // ?noUnusedLocals :true
    //? noUnusedParameters :true
    //? no ImplicitReturns : ture

//1 . awalys anotate your functions of parmeters and return type

//? function calTax (income:number,taxYear=2022):number{
     // let x ;   // this is not use here so enable complier option noUnUsedLocal
//?         if(taxYear<2022)
//?             return income*1.5;
    // if condition falis function always returns a undefined value
        // fix this
//?    return income
//? }

// incomeCal(1200,2,3) // very strict in typeScript not send morethan 2 params
//? calTax(1200)  //completion error we just passed one parmas so  if not pass 2nd parms then set default value


//! *** Objects ***
//let employe:{id:number,name?:''} // opetional settings
/** very hard to read and understand
   *?  let employe:{ 
   *? readonly id:number,
   *? name:string,
   *? retire:(date:Date) => void  // we dont want return anything so place the void here
   *? } = {
   *?     id:1,
   *?     name:'Gopi',
   *?     retire:(date:Date)=>{console.log(date)}
   *? }
**/

// employe.id = 2   // its not modified due to readonly property
// employe.name = "Gopi"
// employe.roll = 12 // we dont have rool in declare employe so its show an error


//! *** Type Aliases ***

//?   type Employe = {
//?         readonly id:number,
//?         name:string,
//?         retire:(date:Date) => void
// ?  }

//? let employe : Employe = {
//?     id:1,
//?     name:'Gopi',
//?     retire:(date:Date)=>{console.log(date)}
//?  }


//! *** Union Types ***

// function player (weight:number | string):number {
//?     //narrowing
//     if(typeof weight === 'number'){
//         return weight*2.2
//     }
//     else return parseInt(weight)*2
    
// }
// player(10)
// player('10Kg')


//! *** Intersection Types ***
// type Dragable = {
//     drag : () => void
// }

// type Resize = {
//     resize: () => void
// }

// type UIWidget = Dragable & Resize 

// let textBox : UIWidget = {
//     drag:() => {},
//     resize:()=>{}
// }


// ! *** Literal Types ***
//Litral(exact,specific)
// this helps to fix the value of a variable
//? let name1 :'gopi'|'sagar'='gopi' // we can do for this using types allias

//? type Quntity = 50 | 100
//? let qty : Quntity = 50

//? type Metric = 'cm' | 'inch'
//? let metric : Metric = 'cm'

//! *** Nullable Types ***

// function greet(name:string | null | undefined ){
//     if(name)
//         console.log("name is there ");
//     else
//         console.log("no name is obtaine")
// }

// greet(undefined)

//! **** Optional Chaining ****
//? type Customer = {
//?     birthDate? : Date
//? }

//? function getCustomer (id:number):Customer | null | undefined{
//?     return id === 0 ? null : {birthDate:new Date()}
//? }

//? let customer = getCustomer(1)
// if(customer != null && customer!=undefined)
  // console.log(customer.birthDate)

  //optional property access operator

//? console.log(customer?.birthDate?.getFullYear())

// Optional element access operator
//? customers?.[0] // if undefinde and null it will be checking

// Optional Call
let log : any = null
log?.("a")
