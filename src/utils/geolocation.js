// Geolocation API helper functions

export const getCurrentCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          speed: position.coords.speed,
          heading: position.coords.heading,
          timestamp: position.timestamp
        });
      },
      (error) => {
        let message = 'Unable to retrieve your location.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access was denied. Please allow location permissions in your browser.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is currently unavailable.';
            break;
          case error.TIMEOUT:
            message = 'The request to get your location timed out.';
            break;
        }
        reject(new Error(message));
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 5000
      }
    );
  });
};

// Reverse geocoding via OpenStreetMap Nominatim
export const reverseGeocodeCoordinates = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
      {
        headers: {
          'Accept-Language': 'en'
        }
      }
    );
    if (!response.ok) {
      throw new Error('Address lookup failed');
    }
    const data = await response.json();
    return data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  } catch (error) {
    console.warn('[Geolocation] Reverse geocoding error:', error.message);
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }
};

export const getGoogleMapsLink = (lat, lng) => {
  return `https://www.google.com/maps?q=${lat},${lng}`;
};
