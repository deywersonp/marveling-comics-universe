import { useMemo, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

interface ClickedLocationProps {
  lat: number;
  lng: number;
};

interface MapProps {
  onChangeAddress: (value: string | undefined) => void;
};

export const Map = ({ onChangeAddress }: MapProps) => {
  const center = useMemo(() => ({ lat: -23.556991766301312, lng: -46.639118075045346 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  })

  const [clickedLocation, setClickedLocation] = useState<ClickedLocationProps | null>(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event?.latLng?.lat() || 0;
    const lng = event?.latLng?.lng() || 0;


    setClickedLocation({
      lat,
      lng,
    });

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      {
        location: {
          lat,
          lng,
        },
      },
      (results, status) => {
        if (status === "OK") {
          onChangeAddress(results?.[0]?.formatted_address);
        }
      }
    );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={clickedLocation ?? center}
      zoom={12}
      onClick={handleMapClick}
    >
      <MarkerF position={clickedLocation ?? center} />
    </GoogleMap>
  ) : null;
};