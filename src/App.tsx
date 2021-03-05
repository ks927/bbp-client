/**
 * TODO: router, login, profile page, meal history, personal meal history
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { IMeal } from './_types/IMeal';

interface Props {
  
}

const App: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [showMeals, setShowMeals] = React.useState(false);
  const [mealsCount, setMealsCount] = useState(0);
  const [runningCount, setRunningCount] = useState(mealsCount);
  const [meals, setMeals] = useState([]);

  const [mealObject, setMealObject] = useState({});

  const onClick = async (): Promise<void> => {
    fetch('http://localhost:8080/login').then((res) => {
      return res.json()
    }).then((data) => {
      setName(data.data[0].name);
    })
  }

  const getMeals = () => {
    console.log('mealscount', mealsCount)
    fetch('http://localhost:8080/meals').then((res) => {
      return res.json()
    }).then((data) => {
      console.log('meals', data.data)

      data.data.forEach(meal => {
        console.log('foreach????', meal)
        mealObject[meal.id]=0
        setMealObject({...mealObject})
      });
      setMeals(data.data)
    })
  }

  const chooseMeals = (amount: number, meal_id: number) => {
    mealObject[meal_id] = Number(amount);

    setMealsCount(mealsCount - amount);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Bran's Plans {name ? name : ''}
        </p>
        <a className="App-link" onClick={onClick}>
          {name ?
            <p onClick={() => setShowMeals(true)}>select meals</p>
          : <p>Login</p>}
        </a>

        <div>

          {showMeals && 
            <div>
              <p>how many you want?</p>
              {/* make this form so the button is what sets the mealsCount and not just the input change*/}
              <input 
                type="text"
                onChange={(event: any) => {
                  setMealsCount(Number(event.target.value))
                  setRunningCount(Number(event.target.value))
                }}
              />
              <button onClick={getMeals}>Choose em</button>
              <br/>
              <span>
                <p>You Want {Number(mealsCount)}</p>
                <p>You've Got {Number(runningCount)} Remaining</p>
              </span>
            </div>}

          {meals.length > 0 &&
            <ul style={{ listStyleType: 'none' }}>
              {meals.map((meal: IMeal) => {
                return (
                  <li>{meal.name}
                  <span>
                    <input type="text" 
                      value={mealObject[meal.id]}
                    />
                    {/* extract to function */}
                    <button onClick={() => {
                      console.log('mealObjecttttt', mealObject)
                      if (runningCount <= 0) return;
                      mealObject[meal.id] += 1
                      setMealObject({...mealObject})
                      setRunningCount(runningCount-1)
                      }}>+</button>
                    <button onClick={() => {
                      if (runningCount >= mealsCount) return;
                      mealObject[meal.id] -= 1
                      setMealObject({...mealObject})
                      setRunningCount(runningCount+1)
                    }}>-</button>
                  </span>
                </li> )
              })}
            </ul>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
