const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase()
    if(userInput === 'rock'||'paper'||'scissors'){
      return userInput
    }
    else{
      console.log('Error')
    }
  }
  
  const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
      case 0:
      return 'rock'
      case 1:
      return 'paper'
      case 2:
      return 'scissors'
    }
  }
  
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      console.log('Its a tie')
    }
  
    else if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        console.log('Computer Won')
      } 
      else{
        console.log('You won')
      }   
    }
  
     else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        console.log('Computer Won')
      } 
      else{
        console.log('You won')
      }   
    }
  
     else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        console.log('Computer Won')
      } 
      else{
        console.log('You won')
      }   
    }
  
    else{
      console.log('User won')
    }
  }
  
  const playGame = () =>{
    var userChoice = getUserChoice('paper')//type in your input here
    var computerChoice = getComputerChoice()
    console.log(userChoice, computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()