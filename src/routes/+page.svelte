<script>
	// import the component we've created
	import WeatherCard from '$lib/weatherCard/weatherCard.svelte';

	// get the data from +page.server.js
	export let data;
</script>

<!-- Centered div -->
<div class="w-full h-full flex justify-center items-center">
	<!-- await your data first and put a placeholder for faster page loads -->
	{#await Promise.all([data.streamed?.weather, data.streamed?.mapsURL])}
		<div class="card h-[100px] w-[350px] animate-pulse rounded-lg md:h-[124px]">
			<div class="px-6 py-4">
				<div class="flex flex-row justify-between">
					<div class="placeholder mb-4 h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
					<div class="placeholder mb-4 h-[16px] w-1/4 rounded-lg p-0 md:h-[24px]" />
				</div>
				<div class="flex flex-row items-baseline justify-between">
					<div class="placeholder h-[36px] w-1/4 rounded-lg p-0 md:h-[52px]" />
					<div class="placeholder h-[16px] w-1/2 rounded-lg p-0 md:h-[24px]" />
				</div>
			</div>
		</div>
		<!-- give variables to the actual WeatherCard, these variable names are all according to Open Weather API. -->
	{:then [weather, mapsURL]}
		<!-- IMPORTANT, if you're in a different timezone than "Europe/YOURCITY", change the timezone city. -->
		<WeatherCard
			currentCity={weather.name}
			timezoneCity={'Europe/' + weather.name}
			weatherState={weather.weather[0].main}
			degreesCelcius={Math.round(weather.main.temp)}
			{mapsURL}
		/>
	{/await}
</div>
