import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

interface GlobeMapProps {
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedCountry: Dispatch<SetStateAction<{ name: string; code: string }>>;
}

export default function GlobeMap({ setDialogOpen, setSelectedCountry }: GlobeMapProps) {

    const [countriesState, setCountriesState] = useState<{ [key: string]: string }>({});
    const [geoData, setGeoData] = useState<any>(null);

    // Function to load GeoJSON data for countries
    const loadGeoData = () => {
        fetch("/countries.geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    };

    useEffect(() => {
        loadGeoData();
    }, []);

    function getColor(status: string) {
        switch (status) {
            case "visited":
                return "#f59e0b"; // giallo
            case "wishlist":
                return "#3b82f6"; // blu
            default:
                return "#e5e7eb"; // grigio
        }
    }

    function style(feature: any) {
        const code = feature.properties.ISO_A2;

        return {
            fillColor: getColor(countriesState[code]),
            weight: 1.5,
            color: "#ffffff",
            fillOpacity: 0,
            zIndex: 1,
        };
    }

    function onEachFeature(feature: any, layer: any) {
        const iso = `ISO3166-1-Alpha-2`;

        const name = feature.properties.name;
        const code = feature.properties[iso];

        layer.on({
            click: () => {
                setSelectedCountry({ name, code });
                setDialogOpen(true);

            },
            mouseover: (e: any) => {
                e.target.setStyle({
                    weight: 0,
                    fillOpacity: 0,
                });
            },
            mouseout: (e: any) => {
                e.target.setStyle({
                    weight: 0,
                    fillOpacity: 0,
                });
            },
        });
    }

    const isMobile = window.innerWidth < 768;

    return (
        <div className='w-full h-full z-0'>
            <MapContainer
                center={[20, 0]}
                zoomControl={isMobile ? false : true}
                zoom={4}
                minZoom={4}
                maxZoom={8}
                maxBounds={[
                    [-90, -180],
                    [90, 180],
                ]}
                maxBoundsViscosity={1.0}
                scrollWheelZoom={false}
                className="w-full h-full z-0">
                {geoData && (
                    <GeoJSON
                        key={JSON.stringify(countriesState)}
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
                <TileLayer
                    zIndex={0}
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <TileLayer
                    zIndex={2}
                    url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
                />
                {/* 
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />
                */}
            </MapContainer>
        </div>
    )
}
