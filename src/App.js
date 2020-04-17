import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 16px;
	font-weight: bolder;
	padding: 5px;
	margin: 5px;
	background: rgb(238, 238, 238);
	border: none;
	border-radius: 5px;
	color: ${(props) =>
		props.primary ? 'rgb(31, 157, 233)' : 'rgb(117,142,154)'};
	cursor: pointer;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Title = styled.h3`
	font-size: 20px;
	margin: ${(props) => props.spacing || '0 0 5px 10px'};
	color: rgb(149, 150, 149);
`;

const Hero = styled.div`
	text-align: center;
	width: 150px;
	padding: 25px 0;
	margin: 0 10px;
	border-radius: 5px;
	background: rgb(95, 125, 140);
	color: white;
	cursor: pointer;
`;

function App() {
	const [heroes, setHeroes] = useState([
		'Superman',
		'Batman',
		'Aquaman',
		'Wonder Woman',
	]);

	return (
		<>
			<Title>Tour of Heroes</Title>
			<Button primary>Dashboard</Button>
			<Button>Heroes</Button>
			<Container>
				<Title spacing='15px 0'>Top Heroes</Title>
			</Container>
			<Container>
				{heroes.map((value, index) => {
					return (
						<Hero key={index}>
							<h4>{value}</h4>
						</Hero>
					);
				})}
			</Container>
		</>
	);
}

export default App;
