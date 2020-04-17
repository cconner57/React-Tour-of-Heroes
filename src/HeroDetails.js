import React from 'react';

const HeroDetails = ({index, name}) => {
	return (
		<>
			<h2>{name} details!</h2>
			<p>id: {index}</p>
			<p>name: </p>
            <input type='text' value={name} />
            <button>Back</button>
		</>
	);
};

export default HeroDetails;
