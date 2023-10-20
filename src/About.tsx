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
			transition: "all 100ms",

			"@media (max-width: 768px)": {
				fontSize: "56px",
			},
		},

		greenContainer: {
			backgroundColor: "#11c269",
			padding: "80px",

			"@media (max-width: 768px)": {
				padding: "40px",
			},
		},

		whiteContainer: {
			backgroundColor: "white",
			padding: "80px",

			"@media (max-width: 768px)": {
				padding: "40px",
			},
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
					style={{
						textAlign: "center",
					}}
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
						<Space h="md" />
						<Text
							className={classes.txt}
							style={{
								textAlign: "justify",
								paddingRight: "20px",
							}}
						>
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
						<Title
							order={3}
							style={{
								paddingLeft: "20px",
							}}
						>
							Why should we care?
						</Title>
						<Space h="md" />
						<Text
							className={classes.txt}
							style={{
								textAlign: "justify",
								paddingLeft: "20px",
							}}
						>
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
				<Space h="md" />
				<SimpleGrid
					cols={2}
					spacing="xl"
					breakpoints={[{ maxWidth: 768, cols: 1, spacing: "md" }]}
				>
					<div>
						<Text
							className={classes.txt}
							color="white"
							style={{
								textAlign: "justify",
								paddingRight: "20px",
							}}
						>
							This is where our app comes in, it is:
							<ul>
								<li>
									A{" "}
									<strong>
										map with heat data that shows the
										locations of the emergencies
									</strong>
								</li>
								<li>
									A{" "}
									<strong>
										message board for authorities to report
										said emergencies
									</strong>{" "}
									and{" "}
									<strong>
										state what immediate or long-term
										actions must be taken.
									</strong>
								</li>
							</ul>
							We will be able to inform local authorities of
							emergencies in the nearby area where intervention is
							immediately needed, and pinpoint areas that are
							affecting nearby communities most. The app will list
							solutions that apply to that area in their
							situations.
							<br />
							<br />
							Shown is a map of Philadelphia, where our app was
							originally built, highlighting the areas most
							vulnerable to heat-related deaths; the amount of
							areas in yellow and above demonstrate the brevity of
							this issue. People are{" "}
							<strong>dying of preventable causes</strong>.
							<br />
							<br />
							With these tools, we help municipalities and local
							organizations pinpoint where aid is necessary and
							what must be done. Everyone, especially those most
							capable of helping, will better know the effects of
							heat in our cities, countless lives will be saved,
							and we will aid the struggle against climate change
							and its dire consequences.
							<br />
							<br />
						</Text>
					</div>
					<div>
						<Image
							radius="md"
							src="https://scholar.harvard.edu/files/styles/os_files_xxlarge/public/ccwagner/files/heatvulnerabilityindex_map.png?m=1592934731&itok=M3u7RXP0"
							style={{
								textAlign: "center",
								paddingLeft: "20px",
							}}
						/>
						<Space h="xs" />
						<Title
							order={6}
							color="white"
							align="center"
							style={{
								paddingLeft: "20px",
							}}
						>
							Source:{" "}
							<a
								href="https://scholar.harvard.edu/ccwagner/heat-vulnerability-philadelphia"
								style={{
									color: "white",
									maxWidth: "400px",
								}}
							>
								Harvard
							</a>
						</Title>
					</div>
				</SimpleGrid>
			</div>
			<Footer />
		</>
	);
}
