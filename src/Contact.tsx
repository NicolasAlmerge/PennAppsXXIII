import { useState } from "react";
import { createStyles, Button, Container, Group, Grid, Space, Textarea, TextInput, Text } from "@mantine/core";
import { PageHeader } from './components/pageheader';
import Footer from "./components/footer";

export default function Contact() {
	let [message, setMessage] = useState("");
	const submitForm = (e: any) => {
		console.log(message);
		e.preventDefault();
		const inputObject = Object.fromEntries(new FormData(e.target));
		console.log(inputObject);
		return true
	};

	const useStyles = createStyles(() => ({
		button: {
			borderColor: "#11c269",
			color: "#11c269"
		}
	}));

	const { classes } = useStyles();

	return (
		<>
			<PageHeader />
			<Space h="md"/>
			<form onSubmit={submitForm}>
				<Container>
					<Text style={{
						fontSize: "48px",
						fontWeight: "bolder"
					}}
					>
						Contact Us!
					</Text>
					<Grid 
						justify="center"
					>
						<Grid.Col span={6}>
							<TextInput
								name="first-name"
								id="first-name"
								label="First Name"
								placeholder="First Name"
								required
								withAsterisk
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								name="last-name"
								id="last-name"
								label="Last Name"
								placeholder="Last Name"
								required
								withAsterisk
							/>
						</Grid.Col>
						<Grid.Col span={12}>
							<TextInput
								name="email"
								id="email"
								label="Email"
								placeholder="Email"
								required
								withAsterisk
							/>
						</Grid.Col>
					</Grid>
					<Space h="xl" />
					<Textarea
						name="message"
						id="message"
						label="Message"
						placeholder="Message"
						minRows={8}
						required
						withAsterisk
					/>	
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
			<Space h="md" />
			<Footer />
		</>
	);
}
