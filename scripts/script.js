alert("Welcome to Number Guessing Game!!!");

let number = Math.floor(Math.random()*100)+1;
let hints = [];

let successStatus = false;

getClue(number);
startingPoint(number);

function startingPoint(num){
    let yourGuess = prompt("Guess a Number below 100?");    
   
    for(let i = 0; i<10 ; i++){
        if(yourGuess == num){
            success();        
            successStatus = true;
            break;
        }
        if(i > 7)   alert(`Almost there!!!! ${10-i} guesses left`);
        if(i< hints.length){ 
            yourGuess = prompt(`${hints[i]}`);
        }else{
             yourGuess =(yourGuess > num)? prompt(`Guess a lesser number`):prompt (`Guess a bigger number`);
        }        
    } 

    if(yourGuess == num && !successStatus){ // if last guess is correct
        success();
        successStatus = true;
   }
    // If User didnt guess the number , It will display the number
    if(!successStatus){
        let ele = document.querySelector(".success");
        ele.classList.add("tryAgain"); // a style class from css
        let pEl = document.createElement("p");
        pEl.textContent = `Better Luck Next time!!!!`;
        let pE2 = document.createElement("p");
        pE2.textContent = `The Number is ${num}`;
        ele.appendChild(pEl);
        ele.appendChild(pE2);
    }
}
// Generates a Clue
function getClue(n){
    if(isPrime(n))
        hints.push("Its a Prime Number");

    (n%2==0)?hints.push("Its a even Number"):hints.push("Its a odd number");

    switch(true){
        case n%10==0: hints.push("It is divisible by 10"); break;
        case n%9==0: hints.push("It is divisible by 9");break;
        case n%8==0: hints.push("It is divisible by 8");break;
        case n%7==0: hints.push("It is divisible by 7");break;
        case n%6==0: hints.push("It is divisible by 6");break;
        case n%5==0: hints.push("It is divisible by 5");break;  
        case n%3==0: hints.push("It is divisible by 3");break;
        case n%2==0: hints.push("It is divisible by 2");break;
        // default: return "odd";
    }

    if(n>=10 && n <50)   hints.push("It is between 10 - 50");
    if(n>=50 && n <100)   hints.push("It is between 50 - 100");

    if(n>0 && n <10)   hints.push("It is between 1 - 10");
    if(n>=10 && n <20)   hints.push("It is between 10 - 20");
    if(n>=20 && n <30)   hints.push("It is between 20 - 30");
    if(n>=30 && n <40)   hints.push("It is between 30 - 40");
    if(n>=40 && n <50)   hints.push("It is between 40 - 50");
    if(n>=50 && n <60)   hints.push("It is between 50 - 60");
    if(n>=60 && n <70)   hints.push("It is between 60 - 70");
    if(n>=70 && n <80)   hints.push("It is between 70 - 80");
    if(n>=80 && n <90)   hints.push("It is between 80 - 90");
    if(n>=90 && n <100)   hints.push("It is between 90 - 100");
}
// returns true if number is prime
function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}

// Displays Success message on the browser
function success(){
    let ele = document.querySelector(".success");
    ele.classList.add("successStyle");  // a style class from css
    ele.textContent = "Hurray!!! You Win!!";        
 
    // adding Toggling effect to the success message
    setInterval(()=>{
        ele.classList.toggle("successStyle");
        ele.classList.toggle("successGold");            
    },700);
}