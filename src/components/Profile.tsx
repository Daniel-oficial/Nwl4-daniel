import { useContext } from 'react';
import { challengesContext } from '../contexts/challengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(challengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/69431555?s=460&v=4" alt="Daniel Viana"/>
            <div>
                <strong>Daniel Viana</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}