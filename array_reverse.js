
var array = [0,1,2,3,4];
var newarr = [5,6];

// for changing    
//now for fetch

array.reverse()
console.log(array);


// const now = array.concat().reverse();
const now = [...array].reverse();
 
console.log(now);

const no = [...now].reverse();

console.log(no);


 

//  for push elemetn into array 
const arr = [1,2,3];
arr.push(6);
console.log(arr);











// ----------------for string reverse=------------------------------

 const str = " hello my name is madanmohan jha";

 const res = str.split('').reverse().join('');
 console.log(res);
