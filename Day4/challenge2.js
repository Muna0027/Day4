/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let grade = prompt('Enter number');
switch (true) {
  case grade >= 50 && grade <= 59:
    console.log('You got a D');
    break;
    case grade >= 60 && grade <= 69:
        console.log('You got a C');
        break;
        case grade >= 70 && grade <= 79:
            console.log('You got a B');
            break;
            case grade >= 80 && grade <= 100:
                console.log('You got an A')
    break;
  default:
    console.log('you failed');
}   
   

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Monday is a working day')
    break
  case 'tuesday':
      console.log('Tuesday is a working day')
      break
      case 'wednesday':
          console.log('wednesday is a working day')
          break
          case 'thursday':
              console.log('thursday is a working day')
              break
              case 'friday':
              console.log('firday is a working day')
              break 
              case 'saturday':
                  console.log('saturday is a weekend')
                  break 
                  case 'sunday':
                      console.log('sunday is a weekend')
}
