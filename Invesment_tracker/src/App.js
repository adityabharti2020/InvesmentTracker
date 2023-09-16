import { useState } from 'react';
import Header from './components/header/Header.js';
import UserInput from './components/InputForm/UserInput.js';
import Result from './components/Result/Result.js';

function App() {
  const[userInput,setuserInputresults] = useState(null);
  const calculateHandler = (userInput) => {
    // console.log(userInput123);
    setuserInputresults(userInput);
    };
    const yearlyData = []; // per-year results
    
    if(userInput){
      let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
      // console.log(currentSavings);
      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }

    }
    
  return (
    <div>
      
     <Header/>
     <UserInput onCalculate={calculateHandler}/> 
     {!userInput && <p style={{textAlign:'center'}}>No invesment calculated yet!</p>}
     {userInput && <Result data={yearlyData} initialInvesment={userInput['current-savings']}/>}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

   
    </div>
  );
}

export default App;
