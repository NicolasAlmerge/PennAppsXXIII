import { Text } from "@mantine/core";
import { NavBar } from "./navbar";

export function PageHeader() {
	return (
		<>
			<Text
				style={{
					textAlign: "center",
					paddingTop: "7px",
					paddingBottom: "7px",
					fontSize: "48px",
					fontWeight: "bolder",
					backgroundColor: "rgb(34, 138, 230)",
					color: "white",
				}}
			>
				Heat Islands Tracker
			</Text>
			<NavBar />
		</>
	);
}
