import { Text } from "@mantine/core";

export default function Footer() {
	return (
		<Text
			style={{
				textAlign: "center",
				color: "white",
				backgroundColor: "rgb(34, 138, 230)",
				paddingTop: "50px",
				paddingBottom: "50px",
			}}
		>
			Created by Nicolas Almerge, Nikolai Peram, Osman Warsi and Ethan
			Frick for the PennApps XXIII event.
			<br />
			All rights reserved.
		</Text>
	);
}
