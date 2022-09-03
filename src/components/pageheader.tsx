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
					backgroundColor: "#11c269",
					color: "white",
				}}
			>
				<span className="headertitle">Heat Islands Tracker</span>
			</Text>
			<NavBar />
		</>
	);
}
