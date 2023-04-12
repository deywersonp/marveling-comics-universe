import { useMemo, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript, Autocomplete } from "@react-google-maps/api";
import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { FaLocationArrow } from 'react-icons/fa';

type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

interface ClickedLocationProps {
  lat: number;
  lng: number;
};

interface MapProps {
  onChangeAddress: (value: string | undefined) => void;
  disabled?: boolean;
};

const libraries: Libraries = ['places'];

const containerStyle = {
  width: "100%",
  height: "400px",
};

export const Map = ({ onChangeAddress, disabled }: MapProps) => {
  const center = useMemo(() => ({ lat: -23.556991766301312, lng: -46.639118075045346 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [coordinates, setCoordinates] = useState<ClickedLocationProps | null>(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event?.latLng?.lat() || 0;
    const lng = event?.latLng?.lng() || 0;

    setCoordinates({
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
          setAutocompleteValue(results?.[0]?.formatted_address!);
          onChangeAddress(results?.[0]?.formatted_address);
        }
      }
    );
  };

  const onPlaceChanged = (address: string | undefined) => {
    if (!address) {
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        setCoordinates({
          lat: results?.[0].geometry.location.lat() || 0,
          lng: results?.[0].geometry.location.lng() || 0,
        });

        setAutocompleteValue(results?.[0]?.formatted_address!);
        onChangeAddress(results?.[0]?.formatted_address);
      } else {
        console.log(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  };

  return isLoaded ? (
    <Box position="relative" w="100%" height="400px">
      <Box position="absolute" width="100%">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates ?? center}
          zoom={12}
          onClick={handleMapClick}
          options={{
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <MarkerF position={coordinates ?? center} />
        </GoogleMap>
      </Box>

      <HStack alignItems="center" mt="16">
        <Flex
          ml="10px"
          position="relative"
          bgColor="white"
          width="500px"
          minWidth="250px"
          maxWidth="30%"
          shadow="base"
          zIndex="modal"
          sx={{
            '& .google-autocomplete': {
              width: '100%'
            }
          }}
        >
          <Autocomplete
            className="google-autocomplete"
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={() => onPlaceChanged(autocomplete?.getPlace().formatted_address)}
          >
            <Input
              type="text"
              placeholder="Endereço"
              borderRadius="none"
              color="gray.800"
              disabled={disabled}
              value={autocompleteValue}
              onChange={(e) => setAutocompleteValue(e.target.value)}
            />
          </Autocomplete>
        </Flex>

        <IconButton
          aria-label="voltar ao centro"
          icon={<FaLocationArrow />}
          colorScheme="blue"
          isRound
          size="sm"
          onClick={() => map?.panTo(coordinates ?? center)}
        />
      </HStack>
    </Box>
  ) : null;
};