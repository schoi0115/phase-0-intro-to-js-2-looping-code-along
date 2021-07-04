// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   } 



const arr1 = [];
function writeCards(names, event) {
    for (let i=0; 
        i < names.length; i++) {
    arr1.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;
    }
return arr1
}



function countDown(int){
    let i = 10;
    while (i>= 0) {
        console.log(i)
        i--
    }
    return int
}