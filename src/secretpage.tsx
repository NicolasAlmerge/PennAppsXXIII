export default function SecretPage() {
	return (
		<section
			className="showcase"
			style={{
				width: "100%",
				height: "100vh",
				position: "relative",
			}}
		>
			<video
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					top: "0",
					left: "0",
					objectFit: "cover",
				}}
				src="video.mov"
				autoPlay
				loop
				muted
			/>
			<h1
				className="title"
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "#000",
					fontSize: "100px",
					color: "#fff",
					mixBlendMode: "multiply",
				}}
			>
				SECRET PAGE
			</h1>
		</section>
	);
}
