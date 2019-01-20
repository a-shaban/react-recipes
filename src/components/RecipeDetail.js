import React from 'react';
import classNames from 'classnames';

const RecipeDetail = (props) => {

   if (!props.recipe) {
      return (
         <p
            className={classNames('h3 p2 bg-white italic center', props.className)}
            style={props.style}
         >
            Please select a recipe to see the details
         </p>
      )
   }
   return (
      <div
         className={classNames('p2 bg-white', props.className)}
         style={props.style}
      >

         <h2 className="h2">{props.recipe.name}</h2>
         <img className="fit" src={props.recipe.image} />
         <div>
            <span>{props.recipe.category}</span>
            <span>{props.recipe.calories}</span>
         </div>

         <h3>Ingredients</h3>
         <ul>
            {props.recipe.ingredients.map(ingredients => (
               <li key={ingredients} >
                  {ingredients}
               </li>
            ))}
         </ul>

         <h3>Steps</h3>
         <ul>
            {props.recipe.steps.map(steps => (
               <li key={steps} >
                  {steps}
               </li>
            ))}
         </ul>
      </div>
   )
};

export default RecipeDetail;