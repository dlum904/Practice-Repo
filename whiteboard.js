const obj = {
    num: 1
}


// const addToThis = function (a){
//     return this.num + a;
// }

function addToThis (a) {
    // console.log(this)
    return this.num + a;
}

const superAddToThis = addToThis.bind(obj);

console.log(superAddToThis(3))
// console.log(addToThis.call(obj, 3))