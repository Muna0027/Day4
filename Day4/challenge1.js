
let num = 3
if (num > 4) {
  console.log(`${num} + is a positive number`)
}

let isRaining = true
if (isRaining) {
    console.log(`Don't forget to take your unbrella!`)
} else {
    console.log(`Today is supposed to be hella sunny! Enjoy yourself!`)
}

let number = 0;
if (number > 0 ) {
    console.log(` This number is positive`)
} else {
    console.log(`This number is negative`)
}

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let isHungry = "whatever"
switch(isHungry){
    case 'not hungry':
      console.log("I'm not hungry")
      break
    case "Let's eat!":
     console.log("Guys im starved! Let's eat!")
     break
    case 'I just ate.':
    console.log('I ate earlier, thanks anyway!')
     break
    default:
    console.log("My sustenance comes from the pain and anguish of my enimies! And Devil's food cake 😈")
  }

  let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.') 
}

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let ageUserInput = prompt(`How old are you?`);
if (ageUserInput > 18) {
    console.log(`Bitch you can drive!!!!!`)
} else {
    console.log(`You're too young to take the wheel. Let God and ya mama take you there.`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

 /* This one I have questions about. I answered it based on exactly what he wanted his output to be. But thinking about it I am almost 100% sure to properly do this you need to have a count function. I was wracking my brain thinking about how I was going to answer this one. H hasn't taught us count functions yet I don't think. I wil look back at previous lessons and see. */

 let userAgeInput = prompt('How old are you?');
switch (true) {
  case userAgeInput >= 30:
    console.log('You are older than me');
    break;
    case userAgeInput = 30 && userAgeInput <= 29:
        console.log('I am older than you');
        break;
        case userAgeInput = 25 || userAgeInput > 30:
            console.log('I am 5 years older than you');
            break;
            case userAgeInput >= 31:
                console.log('You are older than me')
                break;
                case userAgeInput < 25:
                    console.log('You are younger than me')
    break;
  default:
    console.log("what's going on");
} 

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways






 

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways*/


let a = 4;
let b = 3;
if (b <= 3 ) {
    console.log(`a is greater than b`)
} else if (a < b) {
    console.log(`4 is greater than 3`)
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let season = prompt('What season is it?')
let month = season.toLocaleLowerCase()
switch (month) {
  case season === 'September' && 'October' && 'November':
    console.log('It is Autumn')
    break
  case season === 'December' && 'January' && 'February':
    console.log('It is Winter')
    break
  case season === 'March' && 'April' && 'May':
    console.log('It is Spring')
    break
  case season === 'June' && 'July' && 'August':
    console.log('It is Summer')
    break
  default:
    console.log('You are not on Earth 👽') 
}

let ageUserInput = prompt(`How old are you?`);
if (ageUserInput > 18) {
    console.log(`Bitch you can drive!!!!!`)
} else {
    console.log(`You're too young to take the wheel. Let God and ya mama take you there.`)
}