import React from 'react';
import styled from 'styled-components';
import { Italic } from 'styled-icons/boxicons-regular';

const Container = styled.div`
	font-size: 16px;
	color: white;
	padding: 1rem 0;
	font-family: monospace;
	@media only screen and (max-width: 450px) {
		font-size: 12px;
	}
`;

const Text = styled.p`
	text-align: center;
`;



const Footer = () => {
	return (
		<Container>
			<Text>
				Design and repo credit to CrazyChickenDev>, check him out! --> <a>https://github.com/CrazyChickenDev</a>
			</Text>
		</Container>
	);
};

export default Footer;