// Import weather API key
import { OPEN_WEATHER_API_KEY } from '$env/static/private';
import { MAPS_API_KEY } from '$env/static/private';

// IMPORTANT change this city according to your location!
let currentCity = 'Istanbul';

// Create mapsURL, you can adjust "zoom", "size", "markers" and "label."
let mapsURL =
	'https://maps.googleapis.com/maps/api/staticmap?center=' +
	currentCity +
	'&zoom=3&size=400x200&markers=color:red|label:O|' +
	currentCity +
	'&key=' +
	MAPS_API_KEY;

// Main Function
// @ts-ignore implicitly has "any" type error
export const load = async ({ params }) => {
	try {
		// fetch weather state from Open Weather API
		// @ts-ignore implicitly has "any" type error
		const fetchWeather = async () => {
			const weatherRes = await fetch(
				// Fetch from API, units=metric for universality. Change to "units=imperial" if you want to display Fahrenheit.
				`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${OPEN_WEATHER_API_KEY}&units=metric `
			);

			// Error cases.
			if (!weatherRes.ok) {
				throw new Error(`Failed to fetch weather data. Status: ${weatherRes.status}`);
			}

			const weatherData = await weatherRes.json();
			return weatherData;
		};

		return {
			// Stream data to migrate to SvelteKit 2.x as well as make the website load faster
			streamed: {
				// @ts-ignore implicitly has "any" type error
				weather: fetchWeather(),
				mapsURL
			}
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred:', error);
		return {
			redirect: '/error'
		};
	}
};
