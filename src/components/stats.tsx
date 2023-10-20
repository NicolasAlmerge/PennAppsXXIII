import {
	createStyles,
	ThemeIcon,
	Progress,
	Text,
	Group,
	Badge,
	Paper,
} from "@mantine/core";
import { IconSwimming } from "@tabler/icons";

const ICON_SIZE = 60;

const useStyles = createStyles(theme => ({
	card: {
		position: "relative",
		overflow: "visible",
		padding: theme.spacing.xl,
		paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 4,
	},

	icon: {
		position: "absolute",
		overflow: "visible",
		top: -ICON_SIZE / 2,
		left: `calc(50% - ${ICON_SIZE / 2}px)`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
}));

export function StatsCard() {
	const { classes } = useStyles();

	return (
		<Paper
			radius="md"
			withBorder
			className={classes.card}
			mt={ICON_SIZE / 3}
		>
			<ThemeIcon
				className={classes.icon}
				size={ICON_SIZE}
				radius={ICON_SIZE}
			>
				<IconSwimming size={34} stroke={1.5} />
			</ThemeIcon>

			<Text
				align="center"
				weight={700}
				className={classes.title}
				style={{
					marginBottom: "6px",
				}}
			>
				Philidelphia Heat Impact
			</Text>
			<Text color="dimmed" align="center" size="sm">
				Longitude: -75.1302
			</Text>
			<Text color="dimmed" align="center" size="sm">
				Latitude: 39.9954
			</Text>

			<Group position="apart" mt="xs">
				<Text size="sm" color="dimmed">
					Temperature
				</Text>
				<Text size="sm" color="dimmed">
					Celcius
				</Text>
			</Group>

			<Progress value={62} mt={3} color="red" />

			<Group position="apart" mt="md">
				<Text size="sm">26 °C</Text>
				<Badge size="sm">123,456 Inhabitants</Badge>
			</Group>
		</Paper>
	);
}
