/**
 * @description arrow function
 */

 let number = (num) => num + 2
 console.log(number(3))

 let numberTwo = (myNumber) => myNumber * 5
console.log(numberTwo(4))

let numberThree = () => console.log('hello')
numberThree()

function Counter(){
    this.num = 0

    this.timer = setInterval(() => {
        this.num++
        console.log(this.num)
    },10000)
}
let a = new Counter()
// let b = new Counter()
console.log(a.num)  
// clearInterval(b.timer)


