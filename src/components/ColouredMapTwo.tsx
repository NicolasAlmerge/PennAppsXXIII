import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import heat from "../data/heat_severity_vulnerability.json";
import React from "react";
import {Map} from "mapbox-gl"
import { useDispatch } from "react-redux";
import { changeToNewTemp } from "../TemperatureSlice"
import { useAppSelector, useAppDispatch } from '../hooks'



export function ColouredMapTwo() {
	const initialLongitude = (-75.1164).toFixed(4);
	const initialLatitude = (39.9783).toFixed(4);
	const initialZoom = (10).toFixed(2);

	const mapContainer = useRef(null);
	const map = React.useRef<Map | null>(null);
	const [lng, setLng] = useState(initialLongitude);
	const [lat, setLat] = useState(initialLatitude);
	const [zoom, setZoom] = useState(initialZoom);

    const temp = useAppSelector((state) => state.temperature.value)
    const dispatch = useAppDispatch()

	useEffect(() => {
		if (map.current != null) {
            return; // Initialize map only once
        }
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/outdoors-v11",
			center: [lng, lat],
			zoom: zoom,
			maxPitch: 0,
			dragRotate: false,
		});

        const marker1 = new mapboxgl.Marker()
			.setLngLat([-75.1302, 39.9943])
			.setPopup(new mapboxgl.Popup().setHTML("<h3>Help this Heat Island</h3>")) // add popup
			.addTo(map.current)
        
        const marker2 = new mapboxgl.Marker()
			.setLngLat([-74.9869, 40.1149])
			.setPopup(new mapboxgl.Popup().setHTML("<h3>Help this Heat Island</h3>")) // add popup
			.addTo(map.current)

        let markerel = marker1.getElement();

        markerel.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => {
            console.log('clicked!')
            dispatch(changeToNewTemp(45))
            console.log('change temp to 45')
        })

        let markere2 = marker2.getElement();
        
        markere2.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => {
            console.log('clicked!')
            dispatch(changeToNewTemp(10))
            console.log('change temp to 10')
        })
		
		
        
        if (map.current == null) {}
        else {
            map.current.on("load", () => {
                if(map.current == null) {

                }
                else {
                    map.current.addSource("trees", {
                        type: "geojson",
                        data: heat as GeoJSON.FeatureCollection<any>,
                    });

                    map.current.addLayer({
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
                }
            });
        }
	});

	useEffect(() => {
		if (!map.current) return; // Wait for map to initialize
		map.current.on("move", () => {
            if (map.current == null) {}
            else {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
            }
		});
	});

	return (
		<>
			<div className="outerbox">
				<div className="sidebar">
					<span className="first-elem">Longitude: {lng}</span>
					<span className="second-elem">Latitude: {lat}</span>
					<span className="third-elem">Zoom: {temp}</span>
				</div>
				<div ref={mapContainer} className="map-container" />
			</div>
		</>
	);
}