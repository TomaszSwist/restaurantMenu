import React from 'react'
import classes from './MealItem.module.css'

const MealItem = props => {
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.mealName}</h3>
				<div className={classes.description}>{props.mealDescription}</div>
                <div className={classes.price}>${props.mealPrice.toFixed(2)}</div>
			</div>
			<div>
                
            </div>
		</li>
	)
}

export default MealItem
