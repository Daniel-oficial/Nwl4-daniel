import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { challengesContext } from '../contexts/challengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown:  () => void;
} 

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
let countDownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountDownProviderProps) {
    const { startNewChallenge } = useContext(challengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHashFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setHashFinished(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHashFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])
    
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}