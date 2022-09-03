import { createStyles, Header, Container, Group, Text } from "@mantine/core";

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
	inner: {
		height: HEADER_HEIGHT,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	links: {},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

export function NavBar() {
	const { classes } = useStyles();
	const links = [
		{
			link: "/",
			label: "Home",
		},
		{
			link: "/about",
			label: "About",
		},
		{
			link: "/contact",
			label: "Contact",
		},
	];
	const items = links.map(link => {
		return (
			<a key={link.label} href={link.link} className={classes.link}>
				<Text
					style={{
						color: "white",
						fontSize: "24px",
					}}
				>
					{link.label}
				</Text>
			</a>
		);
	});

	return (
		<Header
			height={HEADER_HEIGHT}
			sx={{
				borderBottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.8);",
			}}
			mb={120}
		>
			<Container className={classes.inner} fluid>
				<Group
					spacing={50}
					className={classes.links}
					style={{ margin: "0px auto" }}
				>
					{items}
				</Group>
			</Container>
		</Header>
	);
}
