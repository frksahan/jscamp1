function perfect() {
    let bisi;
    let number;
    let islem;
    for (number = 1; number < 10000; number++) {
      bisi = 0;
      for (islem = 1; islem < number; islem++) {
        if (number % islem == 0) {
          bisi = bisi + islem;
        }
      }
      if(number==bisi){
      console.log(number+ " PERFECT NUMBER ")
      }
    }
  
  }
  perfect()