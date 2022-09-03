import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import heat from "../data/heat_severity_vulnerability.json";

interface IColouredMap {
	lng: number;
	lat: number;
	zoom: number;
}

export class ColouredMap extends React.Component<{}, IColouredMap> {
	public mapContainer: React.RefObject<HTMLDivElement>;

	constructor(props: any) {
		super(props);
		this.state = {
			lng: -75.16,
			lat: 39.95,
			zoom: 10.39,
		};
		this.mapContainer = React.createRef();
	}

	processGeoLocation() {
		for (let geoPoint in heat) {
		}
	}

	componentDidMount() {
		const { lng, lat, zoom } = this.state;
		const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		map.on("move", () => {
			this.setState({
				lng: map.getCenter().lng.toFixed(4),
				lat: map.getCenter().lat.toFixed(4),
				zoom: map.getZoom().toFixed(2),
			});
		});

		map.on("load", () => {
			map.addSource("trees", {
				type: "geojson",
				data: heat,
			});

			map.addLayer({
				id: "heat",
				type: "fill",
				source: "trees",
				layout: {},
				paint: {
					"fill-color": [
						"step",
						["get", "HVI_SCORE"],
						"#7ef542",
						-1,
						"#ecf542",
						0,
						"#f5d742",
						1,
						"#f58142",
						2,
						"#f56642",
						3,
						"#f56642",
						4,
						"#f20505",
					],
					"fill-opacity": 0.5,
				},
			});

			map.addLayer({
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
	}

	render() {
		const { lng, lat, zoom } = this.state;
		return (
			<div>
				<div className="sidebar">
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
				<div ref={this.mapContainer} className="map-container" />
			</div>
		);
	}
}
