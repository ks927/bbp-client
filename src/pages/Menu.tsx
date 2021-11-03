import React from 'react';
import '../assets/App.css';
import { useHistory } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import { IMeal } from '../_types/IMeal';
import { FakeMenu } from './fakeMenu';
import '../assets/App.css';

interface Props {

}

const Menu: React.FC<Props> = () => {
	const history = useHistory();
	const [menu, setMenu] = useState<IMeal>();
	const [expandedItems, setExpandedItem] = useState<number[]>([]);

	const onLoginPress = () => {
		history.push("/login");
	}

	const expandItem = (mealId: number) => {
		if (expandedItems.includes(mealId)) {
			return setExpandedItem(expandedItems.filter((id: number) => id !== mealId));
		}
		
		setExpandedItem([...expandedItems, mealId]);
	}

	React.useEffect(() => {
		setMenu(FakeMenu);
	});

	return (
		<div className="App">
			<h3>This Week's Menu</h3>
			<h4>
				<a className="App-link" onClick={onLoginPress}>Login</a> to Pick Your Meals
			</h4>
			<ul className="menu-list">{menu &&
				menu.map((meal) => {
					return (
						<li onClick={() => expandItem(meal.id)}>
							{meal.name}
							<p className="ingredientList">
								{expandedItems.includes(meal.id) && meal.ingredients.join(', ')}
							</p>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default Menu;
