import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  finished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout; // variável global do js

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60); // 25 * 60 pra passar 25 minutos pra segundos.
  const [isActive, setIsActive] = useState(false); // estado que armazena a atividade ou não do timer.
  const [finished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Math.floor para arredondar o número pra baixo, 24.3 pra 24, por exemplo.
  const seconds = time % 60; // resto da divisão pra ver quantos segundos faltam.

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout); // para cortar o timeout atual.
    setIsActive(false);
    setFinished(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        // setTimeout = pra algo acontecer depois de x tempo.
        setTime(time - 1);
      }, 1000); // função executada depois de 1segundo.
    } else if (isActive && time === 0) {
      setFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); // disparado quando o active for atualizado pelo valor armazenado em setActive e time em setTime.

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        finished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
