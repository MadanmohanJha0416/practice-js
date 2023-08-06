var arr = [1, 6, 9, 4, 10];
let min = arr[0];
let max = arr[0];


//for maximum number


for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("The maximum number in the array is: " + max);

//form minimum number

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("\nThe minimum number in the array is: " + min);


