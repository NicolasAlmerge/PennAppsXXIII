// @ts-nocheck
import Footer from "./components/footer";
import PageHeader from "./components/pageheader";
import { ColouredMap } from "./components/ColouredMap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_PUBLIC_API_KEY;

export default function App() {
	return (
		<>
			<PageHeader />
			<ColouredMap />
			<Footer />
		</>
	);
}
