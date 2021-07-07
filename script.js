var user = document.querySelector('.userchoice'),
    computer = document.querySelector('.computerchoice'),
    startBtn = document.querySelector('.startBtn'),
    results = document.querySelector('.results'),
    userchoice,
    winStates = {Piatra: 'Foarfec', Hartie: 'Piatra', Foarfec: 'Hartie'};

    startBtn.addEventListener('click', function(){
    this.disabled = true;
    results.innerHTML = '';
    user.className = 'userchoice Piatra count-in';
    computer.className = 'computerchoice Piatra count-in';
});
    document.addEventListener('animationend', function(){
        startBtn.disabled=false;
        var userchoice = getRandomChoice();
        var computerchoice = getRandomChoice();
        user.className = 'userchoice ' + userchoice;
        computer.className = 'computerchoice ' + computerchoice;
        results.innerHTML = getWinner(userchoice, computerchoice);
});
    
function getRandomChoice(){
    return Object.keys(winStates)[Math.floor(Math.random()*3)];
}

    function getWinner(userchoice, computerchoice)
    {
        if(userchoice === computerchoice)
            {return 'Egalitate';
    }
    else if(userchoice === winStates[computerchoice])
       {
       
        return 'Computer Wins!' + computerchoice + ' bate ' + userchoice;
       }
      
       return 'Ai castigat! ' + userchoice + ' bate ' + computerchoice;
    }
    