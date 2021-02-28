import { useContext } from 'react';
import { challengesContext } from '../contexts/challengesContext';
import { CountdownContext } from '../contexts/CoutdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(challengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handChallengeSucceded() {
        completedChallenge();
        resetCountdown();
    }

    function handChallengeFailed() {
        resetCountdown();
        resetChallenge();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>    
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className= {styles.challengeFailedButton}
                        onClick={handChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className= {styles.challengeSuccendedButton}
                        onClick={handChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Complete-os e ganhe experiência e avance de leve.
                    </p>
                </div>      
            ) }

        </div>
    );
}