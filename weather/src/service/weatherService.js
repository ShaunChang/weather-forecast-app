import apiClient from "../utils/apiClient";

const param = (location, day)=>({
    key: '191f04bd93bd40af97882243233001',
    q: location,
    days: day,
    aqi: 'yes',
    alerts: 'yes',
})

export const getCurrentWeather = async (location,day) =>   {
    const params = param(location,day);
    return(apiClient.get(apiClient.getUri(),{params}))
}
