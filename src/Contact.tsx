import {
	createStyles,
	Button,
	Container,
	Group,
	Grid,
	Space,
	Textarea,
	TextInput,
	Text,
} from "@mantine/core";
import PageHeader from "./components/pageheader";
import Footer from "./components/footer";

export default function Contact() {
	const submitForm = (e: any) => true;

	const useStyles = createStyles(() => ({
		button: {
			borderColor: "#11c269",
			color: "#11c269",
			transition: "color 0.2s, background-color 0.2s",
			"&:hover": {
				backgroundColor: "#11c269",
				color: "white",
				transition: "color 0.2s, background-color 0.2s",
			},
		},
	}));

	const { classes } = useStyles();

	return (
		<>
			<PageHeader />
			<Space h="md" />
			<Space h="md" />
			<form onSubmit={submitForm}>
				<Container>
					<Space h="xl" />
					<Text
						style={{
							fontSize: "48px",
							fontWeight: "bolder",
						}}
					>
						Contact Us
					</Text>
					<Text
						style={{
							fontSize: "30px",
							fontStyle: "italic",
						}}
					>
						Wanna chat? You have a question?
					</Text>
					<Text
						style={{
							fontSize: "30px",
							fontStyle: "italic",
						}}
					>
						Get in touch with us!
					</Text>
					<Space h="xl" />
					<Space h="xl" />
					<Grid justify="center">
						<Grid.Col span={6}>
							<TextInput
								name="first-name"
								id="first-name"
								placeholder="First Name"
								required
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="last-name"
								id="last-name"
								placeholder="Last Name"
								required
							/>
						</Grid.Col>
						<br />
						<Grid.Col span={12}>
							<TextInput
								name="email"
								id="email"
								type="email"
								placeholder="Email"
								required
							/>
						</Grid.Col>
					</Grid>
					<br />
					<Textarea
						name="message"
						id="message"
						placeholder="Message"
						minRows={8}
						required
					/>
					<Space h="xl" />
					<Space h="xl" />
					<Group grow>
						<Button
							type="reset"
							variant="outline"
							className={classes.button}
						>
							Reset
						</Button>
						<Button
							type="submit"
							variant="outline"
							className={classes.button}
						>
							Submit
						</Button>
					</Group>
				</Container>
			</form>
			<Space h="xl" />
			<Space h="xl" />
			<Space h="xl" />
			<Footer />
		</>
	);
}
