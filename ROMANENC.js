function solution(number){
    let romain = '';
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ]
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
     for (let index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= number) {
        romain += romanNumeral[index];
        number -= decimalValue[index];
      }
    }
    return romain
  }