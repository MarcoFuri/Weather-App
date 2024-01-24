import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from "recharts"
import { useSelector } from "react-redux"

function Chart() {

  const forecastArray = useSelector(state => state.forecast.forecastArray)

  const data = forecastArray.slice(0, 12)

    return (
      <ResponsiveContainer className="pb-5">
        <AreaChart className="pe-5 py-4" data={data}>
            <defs>
                <linearGradient id="feelLike" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="pink" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="pink" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="temperature" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="blue" stopOpacity={0.3} />
                </linearGradient>
            </defs> 
            <XAxis dataKey="hour" />
            <YAxis tickFormatter={(value) => `${value}° C`}/>
            <Tooltip formatter={(value, name) => [`${value}°c`, name]}/>
            <Area type="monotone" name="Temperature" dataKey="temperaturesForecast" stroke="pink" fillOpacity={1} fill="url(#feelLike)" />
            <Area type="monotone" name="Feels like" dataKey="feelingLikeTemperaturesForecast" stroke="blue" fillOpacity={1} fill="url(#temperature)" />
        </AreaChart>
    </ResponsiveContainer>
    )
}


export default Chart