import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// Global declaration for Google Maps API
/* global google */

const GoogleMap = ({ 
  apiKey, 
  center = { lat: 39.1434, lng: -77.2014 }, // Gaithersburg, MD coordinates
  zoom = 15,
  markerTitle = "Barber and Beauty",
  address = "9049 Gaither Rd, Gaithersburg, MD 20877"
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!apiKey) {
      console.warn('Google Maps API key is required');
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      const { Map } = google.maps;
      
      // Create the map
      const map = new Map(mapRef.current, {
        center: center,
        zoom: zoom,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Create the marker
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: markerTitle,
        animation: google.maps.Animation.DROP
      });

      markerRef.current = marker;

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px 0; font-weight: bold;">${markerTitle}</h3>
            <p style="margin: 0; font-size: 14px;">${address}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
              <a href="tel:555-123-4567" style="color: #3b82f6;">(555) 123-4567</a>
            </p>
          </div>
        `
      });

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Add click listener to map to close info window
      map.addListener('click', () => {
        infoWindow.close();
      });

    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });

    // Cleanup function
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
      if (mapInstanceRef.current) {
        // Google Maps doesn't have a direct destroy method, but we can clear the div
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
      }
    };
  }, [apiKey, center, zoom, markerTitle, address]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '400px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
};

export default GoogleMap; 