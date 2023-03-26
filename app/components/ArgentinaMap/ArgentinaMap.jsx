'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';

import Argentina from '../../assets/ProvinciasArgentinaB.json';

function ArgentinaMap({width = 500, height = 700}) {

    const router = useRouter();

    const geojsonLayerRef = useRef();

    const mapRef = useRef();

    const initMapRef = useCallback(map => {

        if(map && geojsonLayerRef.current){
                
            const bounds = geojsonLayerRef.current.getBounds();
            
            map.fitBounds(bounds);
        } 

        mapRef.current = map; 
    }, []);


    useEffect(() => {

        if(geojsonLayerRef.current && mapRef.current){

            const bounds = geojsonLayerRef.current.getBounds();
            
            mapRef.current.fitBounds(bounds);
        }

    }, [width, height]);


    const center = [-40, -63];

    const mapOptions = {
        zoom: 4.2,
        zoomSnap: 0.1,
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        attributionControl: false
    };


    const featuresStyle = () => {

        return {
            weight: 2,
            color: '#f82727',
            dashArray: '',
            fillOpacity: 0.8
        }
    }

    const handlerFeature = (feature, layer) => {

        layer.on({
            mouseover: (e) => {

                let layer = e.target;

                layer.setStyle({
                    weight: 2,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.5
                });

                layer.bringToFront();

                let name = e.target.feature.properties.name;

                layer.bindTooltip(name);

                layer.openTooltip(e.latlng);  
            },

            mousemove: (e) => {

                let layer = e.target;

                layer.getTooltip().setLatLng(e.latlng);  
            },


            mouseout: (e) => {
                let layer = e.target;

                geojsonLayerRef.current.resetStyle(layer);
                
                layer.closeTooltip();
            },

            click: (e) => {

                let name = e.target.feature.properties.name;

                router.push(`./${name.split(' ').join('-')}`);
            }
        });
    }
    
    return (<div className='Map'>

        <MapContainer center={center} style={{width, height, background: 'transparent'}} {...mapOptions} ref={initMapRef}>

            <GeoJSON data={Argentina} onEachFeature={handlerFeature} ref={geojsonLayerRef} style={featuresStyle}></GeoJSON>

        </MapContainer>

    </div>);
}

export default ArgentinaMap;