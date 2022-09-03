import PageHeader from "./components/pageheader";
import Footer from "./components/footer";

import { createStyles, Image, SimpleGrid, Space, Text, Title } from "@mantine/core";

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
			<div className={classes.whiteContainer}>
				<SimpleGrid 
					cols={2} 
					spacing="xl"
					breakpoints={[
						{ maxWidth: 768, cols: 1, spacing: "md" }
					]}
				>
					<Title order={3}>
						What are heat islands?
					</Title>
					<Title order={3}>
						Why should we care?
					</Title>
				</SimpleGrid>
			</div>
			<div className={classes.greenContainer}>
				<Title
					order={2}
					color="white"
				>
					What are we doing about it?
				</Title>
				<SimpleGrid 
					cols={2}
					spacing="xl"
					breakpoints={[
						{ maxWidth: 768, cols: 1, spacing: "md" }
					]}
				>
					<Text></Text>
					<Image
						radius="md"
						src="https://scholar.harvard.edu/files/styles/os_files_xxlarge/public/ccwagner/files/heatvulnerabilityindex_map.png?m=1592934731&itok=M3u7RXP0"
					/>
					<Space />
					<Title 
						order={6}
						color="white"
					>
						Source: <a 
							href="https://scholar.harvard.edu/ccwagner/heat-vulnerability-philadelphia"
							style={{
								color: "white"
							}}
						>
							Harvard
						</a>
					</Title>
				</SimpleGrid>
			</div>
			<Footer />
		</>
	);
}