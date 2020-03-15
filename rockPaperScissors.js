//establish possible inputs from the user and convert to lower case
//returns an error if something other than 'rock', 'paper' or 'scissors' is selected

const getUserChoice = userInput =>
{
  userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||userInput === 'bomb')
            {
    return userInput;
            }
    else {
   console.log('Error!')
         }
}

//function that randomly generates a computer input for the game
function getComputerChoice()
{
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
                      }
  }

//function that compares the users selected input to the computer's randomly generated input
//Have to figure out how to properly nest the if statements
const determineWinner = (userChoice, computerChoice) =>
{
  if(userChoice === 'bomb'){
    return 'Congratulations! You won!';
  }
//entire function is nested from here...  
  if (userChoice === computerChoice) 
  {
    return 'Draw!';
  }

  //First possibility
    if (userChoice === 'rock')
    {
      if (computerChoice === 'paper')
      {
      return 'The computer won!';
      }
      else
      {
      return 'Congratulations! You won!';
      }
    }
      
  //Second possibility
    if (userChoice === 'paper') 
    {
      if (computerChoice === 'scissors')
      {
      return 'The computer won!';
      }
      else{
        return 'Congratulations! You won!';
      }
      }
    
  //Third possibility   
   if (userChoice === 'scissors') 
     {
       if (computerChoice === 'rock'){
         return 'The computer won.';
       }
       else {
         return 'Congratulations! You won!';
       }
     }
     }
     


const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: '+ computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();
