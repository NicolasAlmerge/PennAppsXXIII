import PageHeader from "./components/pageheader";
import Footer from "./components/footer";

import {
	createStyles,
	Image,
	SimpleGrid,
	Space,
	Text,
	Title,
} from "@mantine/core";

export default function About() {
	const useStyles = createStyles(() => ({
		txt: {
			fontSize: "1.2rem",
		},

		statement: {
			fontSize: "84px",

			"@media (max-width: 768px)": {
				fontSize: "56px",
			},
		},

		greenContainer: {
			backgroundColor: "#11c269",
			padding: "80px",
		},

		whiteContainer: {
			backgroundColor: "white",
			padding: "80px",
		},
	}));

	const { classes } = useStyles();

	return (
		<>
			<PageHeader />
			<div className={classes.greenContainer}>
				<Title
					color="white"
					order={1}
					weight="bolder"
					className={classes.statement}
				>
					We help local municipalities aid communities vulnerable to
					the effects of urban heat islands.
				</Title>
			</div>
			<div className={classes.whiteContainer}>
				<SimpleGrid
					cols={2}
					spacing="xl"
					breakpoints={[{ maxWidth: 768, cols: 1, spacing: "md" }]}
				>
					<div>
						<Title order={3}>What are urban heat islands?</Title>
						<Text className={classes.txt}>
							Cities and urban areas hold not only hundreds of
							thousands of people, but also buildings and
							structures that absorb the sun's energy and re-emit
							it in larger amounts than other areas. These areas
							then become relatively extremely hot, even during
							winter in many places. Because the heat is localized
							within these areas, they are called{" "}
							<strong style={{ color: "#11c269" }}>
								urban heat islands
							</strong>
							.
						</Text>
					</div>
					<div>
						<Title order={3}>Why should we care?</Title>
						<Text className={classes.txt}>
							As climate change worsens around the world, so too
							have the effects of urban heat islands on nearby
							cities and their populations. Summers lasting longer
							means heat will be more consistently impactful,
							local governments and individuals need to pay more
							for short term solutions like air conditioning, and
							worst of all: the rate of heat-related injuries and
							mortalities will only increase as time goes on.
							<br />
							<br />
							This is especially true for underprivileged
							communities, who often live in more concentrated
							areas and may not be able to afford methods of
							combatting the heat. Seniors and young children are
							also especially vulnerable.
						</Text>
					</div>
				</SimpleGrid>
			</div>
			<div className={classes.greenContainer}>
				<Title order={2} color="white">
					What are we doing about it?
				</Title>
				<SimpleGrid
					cols={2}
					spacing="xl"
					breakpoints={[{ maxWidth: 768, cols: 1, spacing: "md" }]}
				>
					<Text className={classes.txt} color="white">
						fuck you we ain't doin shit
					</Text>
					<Image
						radius="md"
						src="https://scholar.harvard.edu/files/styles/os_files_xxlarge/public/ccwagner/files/heatvulnerabilityindex_map.png?m=1592934731&itok=M3u7RXP0"
					/>
					<Space />
					<Title order={6} color="white">
						Source:{" "}
						<a
							href="https://scholar.harvard.edu/ccwagner/heat-vulnerability-philadelphia"
							style={{
								color: "white",
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
