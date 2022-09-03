// @ts-nocheck
import Footer from "./components/footer";
import { PageHeader } from "./components/pageheader";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from "react";

mapboxgl.accessToken = process.env.REACT_APP_PUBLIC_API_KEY;

export default function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-75.0951);
	const [lat, setLat] = useState(39.883);
	const [zoom, setZoom] = useState(8.44);

	useEffect(() => {
		if (map.current) return; // Initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/outdoors-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		const marker = new mapboxgl.Marker()
			.setLngLat([-75.0951, 39.883])
			.setPopup(new mapboxgl.Popup().setHTML("<h3>Help this Heat Island</h3>")) // add popup
			.addTo(map.current)

		const marker2 = new mapboxgl.Marker()
			.setLngLat([-75.18835, 39.995198])
			.setPopup(new mapboxgl.Popup().setHTML("<h3>Help this Heat Island</h3>")) // add popup
			.addTo(map.current)
	});

	return (
		<>
			<PageHeader />
			<div>
				<div className="sidebar">
					<span class="first-elem">Longitude: {lng}</span>
					<span class="second-elem">Latitude: {lat}</span>
					<span class="third-elem">Zoom: {zoom}</span>
				</div>
				<div ref={mapContainer} className="map-container" />
			</div>
			<Footer />
		</>
	);
}
