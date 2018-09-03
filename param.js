/**
 * @description call,bind,apply
 */

 function add(c,d){
     console.log(this.a + this.b + c + d)

 }

 let num = {a : 4,b : 9}
//  add.call(num,3,4)
//  add.apply(num,[4,5])
 let small = {
     a : 2,
     go: function(b,c,d){
         console.log(this.a + b + c + d)
     }
 }
 let large = {
     a : 100
 }
 small.go(4,3,2)
 small.go.call(large,2,3,5)
let bindTest = small.go.bind(large,2)
console.log(bindTest)
bindTest(3,3)