class Api {
    static appkey = "4e786e09c343b6446095de0452f95f63";

    static async getWeather(location) {
        return fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.appkey}`
        )
            .then((res) => res.json())
            .then((res) => {
                return {
                    location: res.name,
                    temp: res.main.temp,
                    min: res.main.temp_min,
                    max: res.main.temp_max,
                    icon: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
                };
            });
    }
}

export default Api;
