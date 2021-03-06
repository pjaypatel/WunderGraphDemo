import {NextPage} from "next";
import styles from '../styles/Home.module.css'
import {useLiveQuery} from "../.wundergraph/generated/hooks";
import {FC, useState} from "react";

const RealtimePage: NextPage = () => {
    const [city, setCity] = useState<string>("Berlin");
    console.log("RealtimePage",city);
    return (
        <div className={styles.examplesContainer}>
            <h1>
                Live Weather
            </h1>
            <p>
                If you watch the Network Tab / DevTools, you'll see no WebSockets, No Subscriptions, No Polling, just a
                GET request with chunked encoding (HTTP 1.1) or a stream (HTTP/2).
            </p>
            <p>
                If you blur (un-focus) the browser window/tab you'll see that the stream ends.
            </p>
            <p>
                Once you re-enter the window, the stream re-starts and keepts the UI updated.
            </p>
            <p>
                The upstream doesn't support Subscriptions or Realtime Updates. WunderGraph polls the upstream on the
                serverside and distributed the response to the clients.
            </p>
            <p>
                You can change the polling interval by adjusting the "liveQuery" config in the{' '}
            </p>
            <code className={styles.code}>.wundergraph/wundergraph.config.ts</code>
            <h2>
                Enter City Search
            </h2>
            <input value={city} onChange={e => setCity(e.target.value)}/>
            <LiveWeather city={city}/>
        </div>
    )
}

const LiveWeather: FC<{city: string}> = ({city}) => {
    const {response: liveWeather} = useLiveQuery.Weather({input: {forCity: city}});
    return (
        <div>
            {liveWeather.status === "ok" && (
                <div>
                    <h3>
                        City: {liveWeather.body.data.getCityByName.name}
                    </h3>
                    <p>
                        {JSON.stringify(liveWeather.body.data.getCityByName.coord)}
                    </p>
                    <h3>
                        Temperature
                    </h3>
                    <p>
                        {JSON.stringify(liveWeather.body.data.getCityByName.weather.temperature)}
                    </p>
                    <h3>
                        Wind
                    </h3>
                    <p>
                        {JSON.stringify(liveWeather.body.data.getCityByName.weather.wind)}
                    </p>
                </div>
            )}
        </div>
    )
}

export default RealtimePage;