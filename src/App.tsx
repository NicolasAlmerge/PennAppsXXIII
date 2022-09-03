// @ts-nocheck

import Footer from "./components/footer";
import { PageHeader } from "./components/pageheader";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from "react";
import { Slider } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export function SliderHover() {
	const { hovered, ref } = useHover();

	return (
		<Slider
			defaultValue={8.44}
			min={0.0}
			max={22.0}
			ref={ref}
			label="Zoom"
			styles={{
				thumb: {
					transition: "opacity 150ms ease",
					opacity: hovered ? 1 : 0,
				},

				dragging: {
					opacity: 1,
				},
			}}
		/>
	);
}

mapboxgl.accessToken = process.env.REACT_APP_PUBLIC_API_KEY;

export default function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-74.9453);
	const [lat, setLat] = useState(39.9824);
	const [zoom, setZoom] = useState(8.44);

	useEffect(() => {
		if (map.current) return; // Initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/outdoors-v11",
			center: [lng, lat],
			zoom: zoom,
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
			<div>
				<div className="sidebar">
					<span class="first-elem">Longitude: {lng}</span>
					<span class="second-elem">Latitude: {lat}</span>
					<span class="third-elem">Zoom: {zoom}</span>
				</div>
				<div ref={mapContainer} className="map-container" />
			</div>
			<SliderHover />
			<Footer />
		</>
	);
}
