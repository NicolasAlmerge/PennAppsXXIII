// @ts-nocheck
import Footer from "./components/footer";
import PageHeader from "./components/pageheader";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import heat from "./data/heat_severity_vulnerability.geojson";
import SideInfo from "./components/sideinfo";

mapboxgl.accessToken = process.env.REACT_APP_PUBLIC_API_KEY;

export default function App() {
	const initialLongitude = (-75.1164).toFixed(4);
	const initialLatitude = (39.9783).toFixed(4);
	const initialZoom = (10).toFixed(2);

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(initialLongitude);
	const [lat, setLat] = useState(initialLatitude);
	const [zoom, setZoom] = useState(initialZoom);

	useEffect(() => {
		if (map.current) return; // Initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/outdoors-v11",
			center: [lng, lat],
			zoom: zoom,
			maxPitch: 0,
			dragRotate: false,
		});

		const marker = new mapboxgl.Marker({
			color: "rgb(229, 90, 84)",
		});

		map.current.on("click", event => {
			marker.setLngLat(event.lngLat).addTo(map.current);
		});

		map.current.on("load", () => {
			map.current.addSource("trees", {
				type: "geojson",
				data: heat,
			});

			map.current.addLayer({
				id: "heat",
				type: "fill",
				source: "trees",
				layout: {},
				paint: {
					"fill-color": "#0080ff", // Blue color fill
					"fill-opacity": 0.5,
				},
			});

			map.current.addLayer({
				id: "outline",
				type: "line",
				source: "trees",
				layout: {},
				paint: {
					"line-color": "#000",
					"line-width": 3,
				},
			});
		});
	});

	useEffect(() => {
		if (!map.current) return; // Wait for map to initialize
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<>
			<PageHeader />
			<div className="outerbox">
				<div className="sidebar">
					<span className="first-elem">Longitude: {lng}</span>
					<span className="second-elem">Latitude: {lat}</span>
					<span className="third-elem">Zoom: {zoom}</span>
				</div>
				<div ref={mapContainer} className="map-container" />
			</div>
			<Footer />
		</>
	);
}
