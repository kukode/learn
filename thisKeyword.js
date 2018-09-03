/**
 * @description learn this keyword
 */
console.log(this)

    let person = {
        name : "joko",
        age : 12,
        gender : 'male',
        full : function(){
            console.log(this)
        }
    }   
person.full()


