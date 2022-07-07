(function(){
    var a = b = 3;
  })(); 

  
  console.log("a defined? " + (typeof a !== 'undefined')); 
  console.log("b defined? " + (typeof b !== 'undefined')); 



  var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log(foo1()) // 
console.log('foo1 result :'+ foo1() + '  foo2 result :' + foo2())


function sum(x){
    if(arguments.length == 2){
        return arguments[0]+arguments[1]
    }else{
        return function(y) {return x+y}
    }
      
}
console.log(sum(1)(2))




var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

console.log(1 +  "2" + "2"); //122
console.log(1 +  +"2" + "2"); //32
console.log(1 +  -"1" + "2"); //02
console.log(+"1" +  "1" + "2"); //112
console.log( "A" - "B" + "2"); //NaN2
console.log( "A" - "B" + 2);  //Nan


//******************* */
var a = [1, 2, 3];
a[10] = 99;

console.log(a[6]) 

//********************** */

console.log(typeof NaN === 'number')
console.log(NaN === NaN)



//************************ */
let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};
// var objclone = JSON.parse(JSON.stringify(obj));
var objclone = Object.assign({},obj)
console.log('objclone: ', objclone);
obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone);


//undifined //null

// for(var i = 0; i<5; i++){
//     (function(){
//         setTimeout(function(){   
//             console.log(i)
//         },1000*i)
//     })()
// }


let obj2 ={
    a:1,
    b:2,
    c:3,
    d:{
        name:'gopi'
    }
}

// let obj3 = Object.assign({},obj2)
let obj3 = JSON.parse(JSON.stringify(obj2))
console.log(typeof obj2)
obj2.d.name = "rohit"
console.log("obj2 ==> ",obj2)
console.log("obj3 ==> ",obj3)





let a2 = "rohit";
var b2 = 'gopi';

//hosting
//colsures
//currying
//objects and methods




