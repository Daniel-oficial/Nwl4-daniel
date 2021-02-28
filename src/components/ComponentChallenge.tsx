import { useContext } from 'react';
import { challengesContext } from '../contexts/challengesContext';
import styles from '../styles/components/ComponentChallenge.module.css';

export function CompletedChallenge() {
    const { challengesCompleted } = useContext(challengesContext);
    return (
        <div className={styles.completeChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}