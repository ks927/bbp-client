import React from 'react';
import '../assets/App.css';
import { useState } from 'react/cjs/react.development';
import { IMeal } from '../_types/IMeal';

interface Props {
  
}

const Menu: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [showMeals, setShowMeals] = React.useState(false);
  const [mealsCount, setMealsCount] = useState(0);
  const [runningCount, setRunningCount] = useState(mealsCount);
  const [meals, setMeals] = useState([]);

  const [mealObject, setMealObject] = useState({});

  const getMeals = () => {
    console.log('mealscount', mealsCount)
    fetch('http://localhost:8080/meals').then((res) => {
      return res.json()
    }).then((data) => {
      console.log('meals', data.data)
      const meals: IMeal[] = data.data;

      meals.forEach(meal => {
        console.log('foreach????', meal)
        mealObject[meal.id]=0
        setMealObject({...mealObject})
      });
      setMeals(data.data)
    })
  }

  const addOrSubtractMeal = (mealId: number, operation: string) => {
    if (operation === 'add') {
      if (runningCount <= 0) return;
      mealObject[mealId] += 1
      setRunningCount(runningCount-1)
    } else {
      if (mealObject[mealId] === 0) return;
      if (runningCount >= mealsCount) return;
      mealObject[mealId] -= 1
      setRunningCount(runningCount+1)
    }
    setMealObject({...mealObject})

  }


  return (
    <div className="App">
        <p>
          Menu page
        </p>
        <p onClick={() => setShowMeals(true)}>select meals</p>

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
                    <button onClick={() => addOrSubtractMeal(meal.id, 'add')}>+</button>
                    <button onClick={() => addOrSubtractMeal(meal.id, 'subtract')}>-</button>
                  </span>
                </li> )
              })}
            </ul>
          }
    </div>
  );
}

export default Menu;
