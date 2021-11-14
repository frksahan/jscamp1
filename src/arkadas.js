function friendlyNumbers(number1, number2) 
{
    let slm1 = 0;
    let aslm2 = 0;
  
    for (let i = 0; i < number1; i++) {
      if (number1 % i == 0) {
        slm1 = slm1 + i;
      }
    }
    for (let i = 0; i < number2; i++) {
      if (number2 % i == 0) {
        aslm2 = aslm2 + i;
      }
    }
    if (number1 == aslm2 && number2 == slm1) {
      console.log("ARKADAŞIZ");
    } else {
      console.log("ARKADAŞ OLAMAYIZ");
    }
  }

  friendlyNumbers(220,284);
  friendlyNumbers(221,285);