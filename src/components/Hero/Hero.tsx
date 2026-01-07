import './Hero.css';

type HeroProps = {
    score: number;
    classification: string;
    percentile: number;
    max_score?: number;
};

export function Hero({ score, classification, percentile, max_score = 100 }: HeroProps) {
    return (
        <div className='hero'>
            <h3 className='preamble'>Your Result</h3>
            <div className='avatar'>
                <h1>{score}</h1>
                <h4>of {max_score}</h4>
            </div>
            <div className='narrative'>
                <h2 className='classification'>{classification}</h2>
                <p>
                    You scored higher than {percentile}% of the people who have taken these tests.
                </p>
            </div>
        </div>
    );
}
