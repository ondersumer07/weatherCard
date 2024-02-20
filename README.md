# A Svelte component for aesthetic weather data

This is a component you can use freely to show others your city's weather data.

[View Documentation](https://ondersumer.com) . [Report bug](https://github.com/ondersumer07/weatherCard/issues)

## About the project
![Rain Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/rainDemo.gif)

This is a demo site's repository. You can clone this repo and adjust to your liking, or even build your website on top of it. It took a long time to adjust bits of this component, and I believe it was worth it. weatherCard utilizes [Open Weather API](https://openweathermap.org/api), so you will need an API key from them. You can use their free plan if you plan on building a small project. Also, for the maps feature, you will need [Maps Static API](https://developers.google.com/maps/documentation/maps-static) from Google.

## Built With

- [SvelteKit](https://kit.svelte.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Skeleton](https://www.skeleton.dev/)
- [Floating UI](https://floating-ui.com/) (with Skeleton)
- APIs mentioned in features.

## Installation

First, install npm. The latest version recommended as all the packages in this project were updated to their latest versions on February 2024.

```bash
  npm install -g npm
```

After, clone the repository.

```bash
  git clone https://github.com/ondersumer07/weatherCard.git
```

Then, you need to install the project packages.

```bash
  npm install
```

Go crazy!

## Features

This component supports every possible weather condition mentioned in Open Weather API. It has 7 different animated backgrounds for various situations. Even if the title isn't directly supported, it's replaced by the most similar weather condition. Here are those animations:

### Clear (Morning)
![Clear Morning Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/sunnyDemo.gif)

### Clear (Night)
![Clear Night Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/clearNightDemo.gif)

### Clouds (Morning)
![Clouds Morning Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/cloudsDemo.gif)

### Clouds (Night)
![Clouds Night Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/cloudsNightDemo.gif)

### Rain
![Rain Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/rainDemo.gif)

### Thunderstorm
![Thunderstorm Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/thunderstormDemo.gif)

### Snow
![Snow Demo](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/snowDemo.gif)

Besides the weather condition, weatherCard also has a popup feature that shows the geographical location of your city. It uses Google's Maps Static API which is also customizable. You need to adjust your city name in the +page.server.js. You can find more detailed information about how to customize it in the documentation. Here's how the maps function work:

![Maps Demo Istanbul](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/mapsDemoIstanbul.gif)

![Maps Demo NYC](https://raw.githubusercontent.com/ondersumer07/weatherCard/master/static/demos/gif/mapsDemoNYC.gif)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPEN_WEATHER_API_KEY`

`MAPS_API_KEY`

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/ondersumer07/weatherCard/issues) to discuss it, or directly create a pull request after you edit the README.md file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

### Creating a pull request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Licensed under [BSD-3](https://opensource.org/license/BSD-3-clause/).

## Acknowledgements

 - [Burak Sümer](https://github.com/burraksumer)

## Feedback

If you have any feedback or questions, you can always reach out to me@ondersumer.com
