import React from 'react';
import { Map, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import styles from './Map.module.css';
import { ReactLeafletSearch } from 'react-leaflet-search';

/* This code is needed to properly load the images in the Leaflet CSS */
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

interface Props {
    newsFlashesMarkers: any[];
    leafletRef: React.Ref<any>;
} 

const TempAnywayMap = (props: Props) => {
    const position = [32.0461, 34.8516] as [number, number];
    const googleApiKey = 'AIzaSyDUIWsBLkvIUwzLHMHos9qFebyJ63hEG2M';
    const ReactLeafletSearchComponent: any = withLeaflet(ReactLeafletSearch as any);
    const googleProvider = {
        KEY: googleApiKey,
        VERSION: '3.37'
    };

    return (
        <div className={styles.mapContainer}>
            <Map
                style={{ height: '100vh' }}
                center={position}
                zoom={12}
                maxZoom={30}
                preferCanvas={true}
                zoomControl={true}
                ref={props.leafletRef}
            >
                <ReactLeafletGoogleLayer googleMapsLoaderConf={googleProvider} />
                <ReactLeafletSearchComponent
                    customProvider={googleProvider}
                    position="topleft"
                    inputPlaceholder="חפש מיקום"
                />
            </Map>
        </div>
    );
};

const AnywayMap = React.forwardRef((props: any, ref) => <TempAnywayMap leafletRef={ref} {...props} />);

export default AnywayMap;
