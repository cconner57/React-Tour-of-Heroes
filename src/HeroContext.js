import React, { useState, createContext } from 'react';

export const HeroContext = createContext();

export const HeroProvider = props => {
	const [hero, setHero] = useState({
        heroes: [
            {id: 1, name: 'Superman'},
            {id: 2, name: 'Batman'},
            {id: 3, name: 'Aquaman'},
            {id: 4, name: 'Wonder Woman'}
        ]
    });
	return (
		<HeroContext.Provider value={[hero, setHero]}>
			{props.children}
		</HeroContext.Provider>
	);
};
