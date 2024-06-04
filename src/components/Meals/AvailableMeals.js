import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealsItem  from './MealsItem/MealsItem';

const AvaibleMeals = () => {
  const [meals] = useState([
    {
      id: 'meal1',
      name: 'Misto',
      description: 'Pão, 2 Presunto, 2 mussarela, batata palha e milho',
      price: 10.00,
    },
    {
      id: 'meal1',
      name: 'Misto',
      description: 'Pão, 2 Presunto, 2 mussarela, batata palha e milho',
      price: 10.00,
    },
    {
      id: 'meal1',
      name: 'Misto',
      description: 'Pão, 2 Presunto, 2 mussarela, batata palha e milho',
      price: 10.00,
    },
  ]);
    const mealList = meals.map(meal => (
      <MealsItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
       ))

    return (
       <section className={classes.meals}>
        <Card>
           <ul>
               {mealList}
           </ul>
           </Card>
       </section>
    )
}

export default AvaibleMeals