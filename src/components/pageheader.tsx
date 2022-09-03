import { Text } from "@mantine/core";
import NavBar from "./navbar";

export default function PageHeader() {
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
				<img src="../favicon-heat.svg" width={"60px"}></img>
				<span className="headertitle">Heat Islands</span>{" "}
				<span className="trackertitle">Tracker</span>
			</Text>
			<NavBar />
		</>
	);
}
