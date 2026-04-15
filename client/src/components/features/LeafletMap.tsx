import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import L from "leaflet"
import { useEffect } from "react"
// Data
import { mapData } from "@/data/mapData"

// Number icon
const createIcon = (label: string) =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold shadow-md border-2 border-white">
                ${label}
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

// Food icon
const createFoodIcon = () =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold shadow-md border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-icon lucide-utensils">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

// Photo icon
const createPhotoIcon = () =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-violet-500 text-white text-xs font-bold shadow-md border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera">
                <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>
                </svg>
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

export default function LeafletMap({ daySelected }: { daySelected: number }) {
    const markers = mapData[daySelected as 1 | 2 | 3]

    function FitBounds({ markers }: any) {
        const map = useMap()
        useEffect(() => {
            const bounds = L.latLngBounds(markers.map((m: any) => m.coords))
            map.fitBounds(bounds, { padding: [50, 50] })
        }, [markers])
        return null
    }

    return (
        <MapContainer
            center={[40.7128, -74.0060]}
            zoom={15}
            scrollWheelZoom={true}
            zoomControl={false}
            className="w-full h-full rounded-t-[3rem] absolute top-0 left-0 z-0">

            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

            <FitBounds markers={markers} />

            {markers.map((m, i) => (
                <Marker
                    key={i}
                    position={m.coords as [number, number]}
                    icon={
                        m.type === "food" ? createFoodIcon() : m.type === "photo" ? createPhotoIcon() : createIcon(m.label)} />
            ))}

        </MapContainer>
    )
}