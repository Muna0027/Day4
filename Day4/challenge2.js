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
   