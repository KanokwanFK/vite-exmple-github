//import styles from "./TourismHome.module.css"
import maplibregl, { Marker, Point, Step } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import 'maplibre-gl/dist/maplibre-gl.css'

interface propertieslis {
    name: string;
    property: string;
}
const TourismHome = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const [popupState, setPopupState] = useState<propertieslis>();



    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current || "",
            style: {
                layers: [],
                sources: {},
                version: 8,
                "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=ALn4Ur9fRxc0C3hlqZUq"

            },
            center: [102.834528, 16.447159],//16.447159, 102.834528
            zoom: 4,
        });

        mapRef.current = map

        map.addControl(new maplibregl.FullscreenControl(), "top-right")

        map.on("load", async () => {
            const imge = await map.loadImage("https://cdn-icons-png.freepik.com/256/7276/7276101.png")


            map.addSource("basemap", {
                type: "raster",
                tiles: ["https://api.maptiler.com/tiles/hand-drawn-hillshade/{z}/{x}/{y}.webp?key=ALn4Ur9fRxc0C3hlqZUq"],
                tileSize: 256
            }),

                map.addSource("Satellite", {
                    type: "raster",
                    tiles: ["https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=ALn4Ur9fRxc0C3hlqZUq"],
                    tileSize: 256
                }),

                map.addImage(
                    "icon-point",
                    imge.data
                )
            map.addLayer({
                id: "basemap-id",
                type: "raster",
                source: "basemap"
            });

            map.addLayer({
                id: "Satellite",
                type: "raster",
                source: "Satellite",
                layout: {
                    visibility: "visible"
                }
            })

            // new maplibregl.Marker({
            //     color: "#FF0000",
            // })
            // .setLngLat([102.834528,16.447159])
            // .addTo(map)

            map.addSource("point", {
                type: "geojson",
                data: {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "id": 1,
                            "type": "Feature",
                            "properties": {
                                "name": "point",
                                "property": "h"
                            },
                            "geometry": {
                                "coordinates": [
                                    101.11037473210308,
                                    15.209330256159362
                                ],
                                "type": "Point"
                            }
                        },
                        {
                            "id": 2,
                            "type": "Feature",
                            "properties": {
                                "name": "point",
                                "property": "m"
                            },
                            "geometry": {
                                "coordinates": [
                                    100.54070140754715,
                                    16.34523560936283
                                ],
                                "type": "Point"
                            }
                        },
                        {
                            "id": 3,
                            "type": "Feature",
                            "properties": {
                                "name": "point",
                                "property": "l",
                            },
                            "geometry": {
                                "coordinates": [
                                    102.02232600954181,
                                    16.1040906410785
                                ],
                                "type": "Point"
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                id: "point",
                //type: "symbol",
                type: "circle",
                //source: "point",
                source: "point",
                paint: {
                    "circle-stroke-opacity":
                        [
                            "case",
                            ["boolean", ["feature-state", "click"], false],
                            1,
                            0
                        ],
                    "circle-stroke-width": 2,
                    "circle-radius": 5,
                    "circle-color":
                        ["match",
                            ["get", "property"],
                            "h", "#E44CD0",
                            "m", "#E4DF4C",
                            "l", "#7CE44C",
                            "#fff"
                        ],
                    "circle-opacity": 0.8
                }
                // layout: {
                //     "icon-image": "icon-point",
                //     "icon-size": 0.1

                //}

            });

            let clickId: any = null;
            //คลิกเลเยอร์  point จะเรียก ใช้ฟังก์ชันนี้
            map.on("click", "point", (ev) => {
                // map.setPaintProperty("point", "circle-stroke-opacity", ["case", "boolean", ["feature-state", "click"], false,
                //     1,
                //     0
                // ]);
                if (ev.features?.length) {
                    if (ev.features.length > 0) {
                        console.log("ก่อนคลิก", clickId);
                        map.setFeatureState(
                            { source: "point", id: clickId },
                            { click: false }
                        );
                    }
                    clickId = ev.features[0].id;
                    map.setFeatureState(
                        { source: "point", id: clickId },
                        { click: true }
                    );
                    console.log("หลังคลิก", clickId);
                }
            });

            map.on("click", (ev) => {
                const features = map.queryRenderedFeatures(ev.point, {
                    layers: ["point"]
                });
                if (features.length == 0) {
                    map.setFeatureState(
                        { source: "point", id: clickId },
                        { click: false }
                    );
                    clickId = null;
                    console.log("คลิกที่อื่น", clickId);
                }
            });

            map.setFeatureState({
                source: "point",
                id: clickId
            },
                {
                    click: true
                });


            let Marker: Marker;
            map.on("click", (ev) => {
                // const { lat, lng } = ev.lngLat;

                // if (Marker) {
                //     Marker.remove();
                // }

                // Marker = new maplibregl.Marker({
                //     color: "#FF0000"
                // })

                //     .setLngLat([lng, lat])
                //     .addTo(map);
            });

            map.on("click", "point", (ev) => {
                //const feature  = map.queryRenderedFeatures(ev.point)[0]
                //console.log(feature.properties.name);
                if (ev.features) {
                    const properties = ev.features[0].properties as propertieslis;
                    const coordinates: [number, number] = (ev.features[0].geometry as any).coordinates;
                    setPopupState(properties)

                    // while (Math.abs(ev.lngLat.lng - coordinates[0]) > 180) {
                    //     coordinates[0] += ev.lngLat.lng > coordinates[0] ? 360 : 360;
                    // }

                    if (popupRef.current) {
                        new maplibregl.Popup({
                            // className
                        }).setDOMContent(popupRef.current).setLngLat(coordinates).addTo(map)
                    }
                }
            });

            map.addSource("example", {
                type: "geojson",
                data: "https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson",
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50
            });

            map.addLayer({
                id: "unclustered-point",
                type: "circle",
                source: "example",
                filter: ["!", ["has", "point_count"]],
                paint: {
                    "circle-color": "#11b4da",
                    "circle-radius": 6
                }
            });


            map.addLayer({
                id: "clusters",
                type: "circle",
                source: "example",
                filter: ["has", "point_count"],
                paint: {
                    "circle-color": "#51bbd6",
                    "circle-radius": ["step", ["get", "point_count"], 10, 100, 20, 750, 30]
                }
            });

            map.addLayer({
                id: "cluster-count",
                type: "symbol",
                source: "example",
                filter: ["has", "point_count"],
                layout: {
                    "text-field": ["get", "point_count"],
                    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
                    "text-size": 12
                }
            });

            map.on("click", "clusters", async (ev) => {
                const features = map.queryRenderedFeatures(ev.point, {
                    layers: ["clusters"]
                })[0];
                const clusterId = features.properties?.cluster_id;

                const zoom = await (map.getSource("example") as any)?.getClusterExpansionZoom(clusterId)

                map.easeTo({
                    center: (features.geometry as any).coordinates,
                    zoom: zoom,
                });
            });



        });

        return () => {
            mapRef.current?.remove();

        }

    },
        []);

    const fnSwitBasemap = () => {
        const Swit = mapRef.current?.getLayoutProperty(
            "Satellite",
            "visibility"
        );
        console.log(Swit);

        if (Swit === "visible") {
            mapRef.current?.setLayoutProperty(
                "Satellite",
                "visibility",
                "none"
            )
        } else {
            mapRef.current?.setLayoutProperty(
                "Satellite",
                "visibility",
                "visible"
            )
        }
    }



    return (
        <div className="flex items-center justify-center h-screen">
            <div ref={mapContainer} className="w-[400px] h-[400px] border">
                {/* <div
                    onClick={() => {
                        // mapRef.current?.zoomIn({
                        //     animate: true,
                        //     duration: 1000
                        // });
                        fnSwitBasemap()
                    }}
                    className=" p-2 border bg-amber-50 absolute top-0 left-0 z-[99] mt-2 ml-2 "
                >
                    Zoom in
                </div> */}
            </div>

            <div className="hidden">
                <div ref={popupRef}>
                    <div> title: {popupState?.name} </div>
                    <div> priority: {popupState?.property}</div>
                </div>

            </div>
        </div>
    )
}

export default TourismHome;