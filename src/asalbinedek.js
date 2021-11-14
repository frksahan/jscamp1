function isPrime() {
    for (let i = 2; i < 1000; i++) {
      let counter = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          counter++;
        }
      }
      if (counter == 0) {
        console.log(`${i}'asaldır.`);
      }
    }
  }

  isPrime();