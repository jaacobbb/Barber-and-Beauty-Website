# Google Maps Integration Setup

This guide will help you set up Google Maps integration for the Find Us page.

## Step 1: Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for additional features)
4. Go to "Credentials" and create an API key
5. **Important**: Restrict the API key to your domain for security

## Step 2: Configure the API Key

1. Open the `.env` file in the root directory
2. Replace `your_google_maps_api_key_here` with your actual API key:

```
REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

## Step 3: Update Coordinates (if needed)

The current coordinates are set for Gaithersburg, MD. If your barber shop is at a different location:

1. Open `src/pages/FindUs.js`
2. Update the `barberShopLocation` object with your actual coordinates:

```javascript
const barberShopLocation = {
  lat: YOUR_LATITUDE,
  lng: YOUR_LONGITUDE,
};
```

You can find coordinates by:

- Right-clicking on Google Maps and selecting "What's here?"
- Using Google Maps search and copying coordinates from the URL

## Step 4: Test the Integration

1. Start your development server: `npm start`
2. Navigate to the "Find Us" page
3. You should see an interactive Google Map with a marker for your location

## Features

The Google Maps integration includes:

- Interactive map with custom styling
- Animated marker for your business location
- Clickable marker with business information
- Responsive design that works on all devices
- Fallback to Google Maps link if API key is not provided

## Security Notes

- The `.env` file is already added to `.gitignore` to prevent committing your API key
- Make sure to restrict your API key to your domain in Google Cloud Console
- Consider setting up billing alerts in Google Cloud Console to monitor usage

## Troubleshooting

If the map doesn't load:

1. Check that your API key is correct
2. Verify that the Maps JavaScript API is enabled
3. Check the browser console for error messages
4. Ensure your API key restrictions allow your domain
