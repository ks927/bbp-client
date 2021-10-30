import React from 'react';
import '../assets/App.css';
import { useState } from 'react/cjs/react.development';
import { IMeal } from '../_types/IMeal';
import { FakeMenu } from './fakeMenu';
import '../assets/App.css';

interface Props {

}

const Menu: React.FC<Props> = () => {
	const [menu, setMenu] = useState([]);
	const [expandedItem, setExpandedItem] = useState([]);

	React.useEffect(() => {
		console.log('asdfsadf', expandedItem)
		setMenu(FakeMenu);
	});

	return (
		<div className="App">
			<h3>This Week's Menu</h3>
			<ul className="menu-list">{menu &&
				menu.map((meal) => {
					return (
						<li onClick={() => setExpandedItem(meal.id)}>
							{meal.name}
							<ul>
								{expandedItem == meal.id && meal.ingredients.map(ing => 
									<li>{ing}</li>)
								}
							</ul>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default Menu;
