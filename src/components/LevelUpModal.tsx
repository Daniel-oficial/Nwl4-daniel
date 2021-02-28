import { useContext } from 'react';
import { challengesContext } from '../contexts/challengesContext';
import styles from '../styles/components/levelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(challengesContext);

    
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                
                <strong>parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar o modal"/>
                </button>
            </div>
        </div>
    );
}