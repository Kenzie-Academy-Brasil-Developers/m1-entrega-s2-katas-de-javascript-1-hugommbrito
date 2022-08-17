function oneThroughTwenty() {
    let count20 = []
  for (let i = 1; i <= 20; i++) {
    count20.push(i)
  }
    return count20
}
console.log(oneThroughTwenty())

function evensToTwenty() {
  let countEvens20 = []
  for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
      countEvens20.push(i)
    }
  }
  return countEvens20
}
console.log(evensToTwenty())

function oddsToTwenty() {
  let countOdds20 = []
  for (let i = 1; i <= 20; i++){
    if(i % 2 != 0){
      countOdds20.push(i)
    }
  }
  return countOdds20
}
console.log(oddsToTwenty())

function multiplesOfFive() {
  let MultiplesOf5 = []
  for (let i = 0; i <= 100; i++){
    if(i % 5 == 0){
      MultiplesOf5.push(i)
    }
  }
  return MultiplesOf5
}
console.log(multiplesOfFive())

function squareNumbers() {
  let squareNumbersArray = []
  for(let i = 1; i <= 10; i++){
      squareNumbersArray.push(i * i)
    }
  return squareNumbersArray
}
console.log(squareNumbers())

function countingBackwards() {
  let backwardsArray = []
  for (let i = 20; i >= 1; i--){
    backwardsArray.push(i)
  }
  return backwardsArray
}
console.log(countingBackwards())

function evenNumbersBackwards() {
  let evenBackwardsArray = []
  for (let i = 20; i > 0; i--){
    if(i % 2 == 0){
      evenBackwardsArray.push(i)
    }
  }
  return evenBackwardsArray
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let oddBackwardsArray = []
  for (let i = 20; i > 0; i--){
    if(i % 2 != 0){
      oddBackwardsArray.push(i)
    }
  }
  return oddBackwardsArray
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let multiples5Backwards = []
  for (let i = 100; i >= 0; i--){
    if(i % 5 == 0){
      multiples5Backwards.push(i)
    }
  }
  return multiples5Backwards
}
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let sqrNumbersBackwards = []
  for (let i = 10; i >= 1; i--) {
    sqrNumbersBackwards.push(i *i)
  }
  return sqrNumbersBackwards
}
console.log(squareNumbersBackwards())
