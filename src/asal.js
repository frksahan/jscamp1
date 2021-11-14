function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
  
      let count = 0
      for (let j = 1; j <= numbers[i]; j++) {
  
        if (numbers[i] % j == 0) {
          count++
        }
      }
      if (count == 2) {
        console.log("Sayı Asal Babba!"+"  "+numbers[i])
      } else {
        console.log("Bu Sayı Asal Masal Değil!"+"  "+numbers[i])
      }
  
    }
  
  }

  findPrime(2,5,8,21, 13) 
  findPrime(3,5)

