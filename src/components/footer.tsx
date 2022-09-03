import { Text } from "@mantine/core";

export default function Footer() {
	return (
		<Text
			style={{
				textAlign: "center",
				color: "white",
				backgroundColor: "#11c269",
				paddingTop: "50px",
				paddingBottom: "50px",
			}}
		>
			Created by Nicolas Almerge, Nikolai Peram, Osman Warsi and Ethan
			Frick
			<br />
			for the PennApps XXIII event. All rights reserved.
		</Text>
	);
}
