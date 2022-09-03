export default function SecretPage() {
	return (
		<section
			className="showcase"
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<iframe
				title="rickroll"
				width="420"
				height="315"
				src="https://www.youtube.com/embed/zL19uMsnpSU?mute=1&autoplay=1&loop=1&controls=0"
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					objectFit: "cover",
				}}
			/>

			<h1
				className="title"
				style={{
					width: "100%",
					height: "74%",
					backgroundColor: "#000",
					paddingTop: "250px",
					fontSize: "200px",
					margin: "auto auto",
					color: "#fff",
					marginBottom: "0px",
					mixBlendMode: "multiply",
					textAlign: "center",
					position: "absolute",
				}}
			>
				THE SECRET PAGE
			</h1>
		</section>
	);
}
