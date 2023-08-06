let arr = [5,10,7,9,6,5];

// arr.sort((a,b)=>{
//     return a-b;

// });
//     console.log(arr);

    for(let i = 0; i<arr.length-1; i++){
       
            if (arr[i]===arr[i+1]) {
                return true;
                
          }
        
    }
    console.log(arr);