
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


function sumMul(n,m){
    let num = 0
    if (n > 0 && m > 0){   
     for (let i = n; i < m; i+=n){
        num += i  
      } console.log(num)
  } else console.log("INVALID")
  }
sumMul(75, 8400)