import useUserChoices from "@/hooks/useUserChoices";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { Polyline } from "leaflet";
import { boundaries } from "@/lib/data-loader";
import { DEFAULT_STYLE } from "./map/constants";
import AddressSearch from "./AddressSearch";

export default function MainMap() {
  const { watch } = useUserChoices();
  const { boundaryLayer } = watch();
  const selectedBoundary = boundaryLayer ? boundaries[boundaryLayer] : null;

  return (
    <MapContainer className="h-full w-full" center={[41.85, -87.72]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddressSearch />
      {selectedBoundary && (
        <GeoJSON
          key={boundaryLayer}
          style={DEFAULT_STYLE}
          data={selectedBoundary.data}
          onEachFeature={(feature, layer) => {
            layer.bindTooltip(selectedBoundary.getTooltip(feature), {
              direction: "center",
            });

            if (layer instanceof Polyline) {
              layer.on("mouseover", function () {
                layer.setStyle({
                  fillColor: "#12329b", // Change color on hover
                  fillOpacity: 0.9,
                });
              });

              layer.on("mouseout", function () {
                layer.setStyle(DEFAULT_STYLE); // Revert to original style
              });
            }
          }}
        />
      )}
    </MapContainer>
  );
}
