import { Title } from "@mantine/core";
import Footer from "./components/footer";
import PageHeader from "./components/pageheader";

export default function About() {
	return (
		<>
			<PageHeader />
			<div
				style={{
					backgroundColor: "#1BEB82",
					padding: "80px",
					justifyContent: "center",
				}}
			>
				<Title color="white" order={1} weight={800} size={90}>
					We help local municipalities and governments communities
					vulnerable to the effects of urban heat islands.
				</Title>
			</div>
			<div
				style={{
					display: "flex",
					padding: "80px",
				}}
			>
				<Title order={3}>
					What exactly are urban heat islands, and why should we care?
				</Title>
			</div>
			<Footer />
		</>
	);
}
