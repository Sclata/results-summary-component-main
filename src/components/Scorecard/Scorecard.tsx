import './Scorecard.css';

type ScorecardProps = {
    icon: string;
    category: string;
    color: string;
    score: number;
    max_score?: number;
};

export function Scorecard({ icon, category, color, score, max_score = 100 }: ScorecardProps) {
    return (
        <div className={`scorecard scorecard--${color}`}>
            <div className='label'>
                <img src={`${icon}`} alt='' />
                <h4>{category}</h4>
            </div>
            <div className='score-report'>
                <span className='score'>{score + ' '}</span>
                <span className='max-score'>/ {max_score}</span>
            </div>
        </div>
    );
}
