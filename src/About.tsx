import PageHeader from "./components/pageheader";
import Footer from "./components/footer";

import { createStyles, SimpleGrid, Text, Title } from "@mantine/core";

export default function About() {

	const useStyles = createStyles(() => ({
		statement: {
			fontSize: "84px",

			'@media (max-width: 768px)': {
				fontSize: "56px"
			}
		},

		greenContainer: {
			backgroundColor: "#11c269",
			padding: "80px"
		},
	
		whiteContainer: {
			backgroundColor: "white",
			padding: "80px"
		}
	}));
	
	const { classes } = useStyles(); 

	return(
		<>
			<PageHeader />
			<div className={classes.greenContainer}>
				<Title 
					color="white"
					order={1}
					className={classes.statement}
				>
					We help local governments aid communities vulnerable to the effects of urban heat islands.
				</Title>
			</div>
			<div className={classes.greenContainer}>
				<SimpleGrid>
					<Title>FUCK YOU</Title>
					<Title>FUCK YOU MORe</Title>
				</SimpleGrid>
			</div>
			<Footer />
		</>
	);
}