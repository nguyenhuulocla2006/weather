import axios from "axios";

export const getWeatherByLatLng = async (lat: number, lng: number) => {
    const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
            latitude: lat,
            longitude: lng,
            current: 'temperature_2m,weathercode,relative_humidity_2m,wind_speed_10m,uv_index'
        },
    });

    return res.data;
};

export const locationAPI = axios.create({
    baseURL: "https://provinces.open-api.vn/api/",
    timeout: 5000,
});
