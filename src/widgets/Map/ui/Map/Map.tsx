// libs
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// model
import { mapTheme } from './helpers/mapTheme';
// styles
import cls from './Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '24px',
};

const mapPosition = {
  lat: 50.46822027525569,
  lng: 30.51474971993131,
};

const defaultOptions = {
  clickableIcons: false,
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  styles: mapTheme,
  gestureHandling: 'greedy',
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className={cls.mapWrapper}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapPosition}
          zoom={16}
          options={defaultOptions}
        >
          <Marker position={mapPosition} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
