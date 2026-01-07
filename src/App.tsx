import { useState, useEffect } from 'react';
import { Scorecard } from './components/Scorecard/Scorecard';
import { Button } from './components/Button/Button';
import { Hero } from './components/Hero/Hero';
import type { Key } from 'react';
import './App.css';

export type ScoreData = {
    category: string;
    score: number;
    icon: string;
    color: string;
};

const averageScore = (data: ScoreData[]): number => {
    let sum = 0;
    data.forEach((entry: ScoreData) => {
        sum += entry['score'];
    });

    return Math.round(sum / data.length);
};

function App() {
    const [scoreData, setScoreData] = useState([]);

    useEffect(() => {
        const _url = 'data.json';
        fetch(_url)
            .then((response) => response.json())
            .then((jsonData) => setScoreData(jsonData))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className='container'>
                <Hero score={averageScore(scoreData)} classification='Great' percentile={65} />
                <div className='score-summary'>
                    <h2>Summary</h2>
                    <ul>
                        {scoreData.map((data: ScoreData, key: Key) => {
                            return (
                                <li key={key}>
                                    <Scorecard
                                        icon={data.icon}
                                        category={data.category}
                                        score={data.score}
                                        color={data.color}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <Button text='Continue'></Button>
                </div>
            </div>
        </>
    );
}

export default App;
