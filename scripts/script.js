// alert("Hello")

let num = Math.floor(Math.random()*100);

let success = false;
let clue = check(num);
let yourGuess = prompt("Guess a Number?");

for(let i = 0; i<10 ; i++){
    let msg = '';
    if(yourGuess == num){
        let ele = document.querySelector(".success");
        ele.classList.add("successStyle");  // a style class from css
        ele.textContent = "Hurray!!! You Win!!";
        success = true;
        break;
     }
     else if(i > 7){
        alert(`Almost there!!!! ${10-i} guesses left`);
    }
    msg += (yourGuess > num)? ('Try lesser Number '):('Try greater Number ');
    yourGuess = (clue === "prime" || clue === "odd")?(prompt(`${msg} which is ${clue}`)):(yourGuess = prompt(`${msg} which is multiple of ${clue}`));  
    
} 

// If User didnt guess the number , It will show the number
if(!success){
    let ele = document.querySelector(".warning");
    ele.classList.add("tryAgain"); // a style class from css
    ele.textContent = `The Number is ${num}`;
}

function check(n){
    
    if(isPrime(n))
        return "prime";

    switch(true){
        case n%10==0: return "ten";
        case n%9==0: return "nine";
        case n%7==0: return "seven";
        case n%5==0: return "five";
        case n%6==0: return "six";
        case n%3==0: return "three";
        case n%2==0: return "two";
        default: return "odd";
    }
}

function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}