<<<<<<< Updated upstream
import { Title } from "@mantine/core";
=======
import { Image, Text, Title, SimpleGrid, Space } from "@mantine/core";
>>>>>>> Stashed changes
import Footer from "./components/footer";
import PageHeader from "./components/pageheader";

export default function About() {
	return (
		<>
			<PageHeader />
<<<<<<< Updated upstream
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
=======
			<div style={{
				backgroundColor: "#11c269",
				padding: "80px"
			}}>
				<Title 
					color="white"
					order={1} 
					weight={800} 
					size={70}
				>
					We help local governments aid communities vulnerable to the effects of urban heat islands.
>>>>>>> Stashed changes
				</Title>
			</div>
			<div style={{
					display: "flex",
<<<<<<< Updated upstream
					padding: "80px",
				}}
			>
				<Title order={3}>
					What exactly are urban heat islands, and why should we care?
				</Title>
=======
					padding: "80px"
			}}>
				<SimpleGrid cols={2} spacing="xl">
					<Title order={3} size="56px">What are urban heat islands?</Title>
					<Title order={3} size="56px">Why should we care?</Title>
				</SimpleGrid>
			</div>
			<div style={{
				backgroundColor: "#11c269",
				padding: "80px"
			}}>
				<SimpleGrid cols={2} spacing="xl">
					<Title 
						color="white"
						order={3} 
						size="56px"
					>
						What do we do?
					</Title>
					<Image
						radius="md"
						height={500}
						fit="contain"
						src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iStHprOrH4sw/v0/-1x-1.jpg"
					/>
				</SimpleGrid>
>>>>>>> Stashed changes
			</div>
			<Footer />
		</>
	);
}
