import {NextPage} from "next";
import {useQuery} from "../.wundergraph/generated/hooks";
import styles from "../styles/Home.module.css";

const Mocks: NextPage = () => {
    const weather = useQuery.FakeWeather();
    return (
        <div>
            <h1>
                Mocks: Fake Weather
            </h1>
            <p>
                With WunderGraph, it's very easy to create typesafe mocks.
            </p>
            <p>
                For each Operation you define, the code generator automatically generates all the models and scaffolds a config object to create typesafe mocks.
            </p>
            <p>
                All you have to do is implement a function that returns a mock object.
            </p>
            <p>
                You can define complex logic if you want, or use an in memory data structure or even a database if you want stateful mocks.
            </p>
            <p>
                To modify the mock, look at&nbsp;
                <code className={styles.code}>.wundergraph/wundergraph.config.ts</code>
                &nbsp;
                line: 131
            </p>
            <h2>
                Response
            </h2>
            <p>
                {JSON.stringify(weather)}
            </p>
        </div>
    )
}

export default Mocks;